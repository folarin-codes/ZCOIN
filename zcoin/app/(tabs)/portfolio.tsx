
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, Dimensions, Image, FlatList} from 'react-native';
import styles from "../style";
import { COLORS } from "@/constants/Colors";
import FontStyles from "@/constants/sizes";
import Button from "@/components/Button";


const Portfolio = ()=>{
    const {width} = Dimensions.get('window');

    const coin_data = [
        {
            id:0,
            name: 'Etherium',
            amount: '0.000468 ETH',
            price:"NGN 3,400,00",
            change : '-21.00%',
            image:require('../../assets/images/eth.png')
        },
        {
            id:1,
            name: 'Cardano',
            amount: '18.64 ADA',
            price:"NGN 400,00",
            change : '+16.31%',
            image:require('../../assets/images/cardano.png')
        }, {
            id:2,
            name: 'TRON',
            amount: '10.67 TRX',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/tron.png')
        }, {
            id:3,
            name: 'Dogeoin',
            amount: '6.868 DOGE',
            price:"NGN 60,00",
            change : '+120.00%',
            image:require('../../assets/images/doge.png')
        },
    ]

    return(
        <SafeAreaView style={styles.container}>
           <View style={{backgroundColor:COLORS.primary, borderRadius:8, paddingHorizontal:20, paddingVertical:10, marginTop:20}}>
            <Text style={{...FontStyles.heading, color:COLORS.white, marginTop:20}}>Portfolio</Text>
            <View style={{marginVertical:20}}>
                <Text style={{...FontStyles.small, color:COLORS.white}}>Holding value </Text>
                <View style={{flexDirection:'row'}}>

                 <Text style={{...FontStyles.heading, color:COLORS.white}} >NGN 100,000.57</Text>
                 <Text style={{...FontStyles.tertiaryText, marginTop:10, marginLeft:5, color:COLORS.white}}>+9.77%</Text>   

                </View>

                <View style={{marginTop:20, flexDirection:'row', justifyContent:'flex-start'}}>
                    <View style={{marginRight:15}}>
                        <Text style={{...FontStyles.small, color:COLORS.white}}>Invested value</Text>
                        <Text style={{...FontStyles.secondaryText, color:COLORS.white}}>NGN5,000.78</Text>
                    </View>

                    <View style={{borderRightColor:'#F8F9FA80', borderRightWidth:1}}/>
                    <View style={{marginLeft:15}}>
                        <Text style={{...FontStyles.small, color:COLORS.white}}>Available INR</Text>
                        <Text style={{...FontStyles.secondaryText, color:COLORS.white}}>NGN 70,000</Text>
                    </View>
                </View>
            </View>

           </View>

           <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:20}}>
            <Button textColor={COLORS.white} buttonText="Depost NGN" buttonStyles={{backgroundColor: COLORS.primary, borderColor:COLORS.primary, width:width*.45}}/>

            <Button textColor={COLORS.primary} buttonText="Withdraw NGN" buttonStyles={{backgroundColor: COLORS.white, borderColor:COLORS.primary, width:width*.45}}/>
           </View>

           <Text style={{...FontStyles.heading}}>Your coins</Text>

           <View style={{marginVertical:20}}>
            <FlatList 
            data={coin_data}
            renderItem={(data)=>{
                return(
                    <View style={{marginBottom:20, backgroundColor:COLORS.white, padding:20, borderRadius:8}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row'}}>
                                <Image source={data.item.image} resizeMode="contain"/>
                            
                            <View style={{marginLeft:10}}>
                                {/* <Text>{data.item.iconUrl} </Text> */}
                                <Text style={{...FontStyles.primaryText, marginBottom:5}}>{data.item.name}</Text>
                                <Text style={{...FontStyles.tertiaryText}}>{data.item.amount}</Text>
                            </View>

                            </View>

                            <View style={{alignItems:'flex-end'}}>
                                <Text style={{...FontStyles.secondaryText, marginBottom:5}}>{data.item.price}</Text>
                                <Text style={{...FontStyles.tertiaryText,color: data.item.change.split('')[0] =="-"? 'red': 'green'}}>{data.item.change}</Text>
                            </View>
                

                    </View>

          </View>

                )
            }}
            
            />
           </View>

        </SafeAreaView>

    )
}

export default Portfolio;