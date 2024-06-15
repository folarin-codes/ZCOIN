
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, Image,TouchableOpacity, ScrollView, FlatList, Platform, Dimensions, Animated} from 'react-native';
import styles from "../style";
import { COLORS } from "@/constants/Colors";
import FontStyles from "@/constants/sizes";
import { useRef } from "react";

const Markets = ()=>{

    const {height , width} = Dimensions.get('screen')

    const animation = useRef(new Animated.Value(0)).current;

    const handleMovement = (id: number)=>{
        // const defaultId = 0;
        let offset = 0

        if(id == 1) {offset = width*.23; scrollRef.current?.scrollTo({x:width, y:0,animated:true})}
        if (id ==2) {offset = width *.49;scrollRef.current?.scrollTo({x:width*2, y:0,animated:true})}
        if(id ==3) {offset = width*.8;scrollRef.current?.scrollTo({x:width*3, y:0,animated:true})}
        if(id ==0){ offset; scrollRef.current?.scrollTo({x:0, y:0,animated:true})}

        Animated.timing(animation, {
            toValue: offset,
            duration:100,
            useNativeDriver:true,
        }).start()
    }

    const scrollRef = useRef<ScrollView>(null);


    const coin_data = [
        {
            id:0,
            name: 'Etherium',
           symbol: 'ETH',
            price:"NGN 3,400,00",
            change : '-21.00%',
            image:require('../../assets/images/eth.png')
        },
        {
            id:1,
            name: 'Cardano',
           symbol: 'ADA',
            price:"NGN 400,00",
            change : '+16.31%',
            image:require('../../assets/images/cardano.png')
        }, {
            id:2,
            name: 'TRON',
           symbol: 'TRX',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/tron.png')
        }, {
            id:3,
            name: 'Dogeoin',
           symbol: 'DOGE',
            price:"NGN 60,00",
            change : '+120.00%',
            image:require('../../assets/images/doge.png')
        },
        {
            id:5,
            name: 'Tether',
            symbol: 'USDT',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/usdt.png')
        },
    ]

    const gainers= [
        {
            id:0,
            name: 'Bitcoin',
            symbol: 'BTC',
            price:"NGN 3,400,00",
            change : '-21.00%',
            image:require('../../assets/images/btc.png')
        },
        {
            id:1,
            name: 'Cardano',
            symbol: 'ADA',
            price:"NGN 400,00",
            change : '+16.31%',
            image:require('../../assets/images/cardano.png')
        }, {
            id:2,
            name: 'Tether',
            symbol: 'USDT',
            price:"NGN 250,00",
            change : '+16.58%',
            image:require('../../assets/images/usdt.png')
        }, 
        {
            id:3,
            name: 'Neo',
            symbol: 'NEO',
            price:"NGN 250,00",
            change : '16.58%',
            image:require('../../assets/images/neo.png')
        }, 
        {
            id:4,
            name: 'EOS',
            symbol: 'EOS',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/eos.png')
        }, {
            id:5,
            name: 'Dogeoin',
            symbol: 'DOGE',
            price:"NGN 60,00",
            change : '+120.00%',
            image:require('../../assets/images/doge.png')
        },
        {
            id:6,
            name: 'Binance Coin',
            symbol:'USDT',
            price:"NGN 1500",
            change : '+120.00%',
            image:require('../../assets/images/usdt.png')

        },
        {
            name:'Uniswap',
            symbol:'UNI',
            price:"NGN 124000",
            change : '+120.00%',
            image:require('../../assets/images/uni.png')
        }
    ]

    const losers =[
        {
            id:0,
            name: 'Etherium',
            symbol: 'ETH',
            price:"NGN 3,400,00",
            change : '-21.00%',
            image:require('../../assets/images/eth.png')
        }, 
        {
            id:1,
            name: 'TRON',
            symbol: 'TRX',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/tron.png')
        },
        {
            id:2,
            name: 'Neo',
            symbol: 'NEO',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/neo.png')
        }, 
        {
            id:3,
            name: 'EOS',
            symbol: 'EOS',
            price:"NGN 250,00",
            change : '-16.58%',
            image:require('../../assets/images/eos.png')
        }, 
            
             
            

    ]


    return(
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.background}}>
            <View>
                <View style={{paddingHorizontal:20}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:20}}>
                    <Text style={{...FontStyles.heading}}>Market is down <Text style={{color:'red'}}>-11.7%</Text></Text>
                    <Image source={require('../../assets/images/search.png')}/>
                </View>

                <Text style={{...FontStyles.tertiaryText}}>In the past 24 hours</Text>

                <View style={{marginVertical:20}}>
                    <Text style={{...FontStyles.heading}}>Coins</Text>
                </View>

                <View style={{alignContent:'center'}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                
                        <TouchableOpacity onPress={()=> handleMovement(0)}>
                            <Text style={{...FontStyles.secondaryText}}>All</Text>
                        </TouchableOpacity> 

                        <TouchableOpacity onPress={()=> handleMovement(1)}>
                        <Text style={{...FontStyles.secondaryText}}>Gainer</Text>
                            </TouchableOpacity> 
                        <TouchableOpacity onPress={()=> handleMovement(2)}>
                            <Text style={{...FontStyles.secondaryText}}>Loser</Text>
                        </TouchableOpacity> 
                        <TouchableOpacity onPress={()=> handleMovement(3)}>
                            <Text style={{...FontStyles.secondaryText}}>Favourites</Text>
                        </TouchableOpacity> 

                    </View>

                    <Animated.View style={{width:25, backgroundColor:COLORS.primary, height:5, borderRadius:50, transform:[{translateX: animation}],}}/>
                    
                </View>
                </View> 

                <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled bounces={true} style={{marginTop:20 , paddingBottom:50}} ref={scrollRef} scrollEnabled={false} >

                    <View style={{width:width, paddingHorizontal:20}}>
                    <FlatList 
                        data={coin_data}
                        renderItem={(data)=>{
                        return(
                            <View style={{marginBottom:20, backgroundColor:COLORS.white, padding:20, borderRadius:12}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={data.item.image} resizeMode="contain"/>
                                    
                                    <View style={{marginLeft:10}}>
                                        {/* <Text>{data.item.iconUrl} </Text> */}
                                        <Text style={{...FontStyles.primaryText, marginBottom:5}}>{data.item.name}</Text>
                                        <Text style={{...FontStyles.tertiaryText}}>{data.item.symbol}</Text>
                                    </View>

                                    </View>

                                    <View style={{alignItems:'flex-end'}}>
                                        <Text style={{...FontStyles.secondaryText, marginBottom:5}}>{data.item.price}</Text>
                                        <Text style={{...FontStyles.tertiaryText,color: data.item.change.split('')[0] =="-"? 'red': 'green'}}>{data.item.change}</Text>
                                    </View>
                                </View>
                            </View>
                        )}}

                        // style={{width:width, marginRight:40}}
                    />

                </View>

                <View style={{width:width}}>
                    <FlatList 
                        data={gainers}
                        renderItem={(data)=>{
                        return(
                            <View style={{marginBottom:20, backgroundColor:COLORS.white, padding:20, borderRadius:12, width:width}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={data.item.image} resizeMode="contain"/>
                                    
                                    <View style={{marginLeft:10}}>
                                        {/* <Text>{data.item.iconUrl} </Text> */}
                                        <Text style={{...FontStyles.primaryText, marginBottom:5}}>{data.item.name}</Text>
                                        <Text style={{...FontStyles.tertiaryText}}>{data.item.symbol}</Text>
                                    </View>

                                    </View>

                                    <View style={{alignItems:'flex-end'}}>
                                        <Text style={{...FontStyles.secondaryText, marginBottom:5}}>{data.item.price}</Text>
                                        <Text style={{...FontStyles.tertiaryText,color: data.item.change.split('')[0] =="-"? 'red': 'green'}}>{data.item.change}</Text>
                                    </View>
                                </View>
                            </View>
                        )}}
                        // style={{paddingHorizontal:20}}
                        contentContainerStyle={{marginHorizontal:20}}
                    />
                </View>

                <View style={{width:width, paddingHorizontal:20}}>
                    <FlatList 
                        data={losers}
                        renderItem={(data)=>{
                        return(
                            <View style={{marginBottom:20, backgroundColor:COLORS.white, padding:20, borderRadius:12}}>
                                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Image source={data.item.image} resizeMode="contain"/>
                                    
                                    <View style={{marginLeft:10}}>
                                        {/* <Text>{data.item.iconUrl} </Text> */}
                                        <Text style={{...FontStyles.primaryText, marginBottom:5}}>{data.item.name}</Text>
                                        <Text style={{...FontStyles.tertiaryText}}>{data.item.symbol}</Text>
                                    </View>

                                    </View>

                                    <View style={{alignItems:'flex-end'}}>
                                        <Text style={{...FontStyles.secondaryText, marginBottom:5}}>{data.item.price}</Text>
                                        <Text style={{...FontStyles.tertiaryText,color: data.item.change.split('')[0] =="-"? 'red': 'green'}}>{data.item.change}</Text>
                                    </View>
                                </View>
                            </View>
                        )}}

                  
                    />

                </View>

                <View style={{width:width}}>

                    <View style={{marginTop:60}}>
                        <Image source={require('../../assets/images/image.png')} style={{alignSelf:'center'}}/>

                        <View style={{alignSelf:'center', marginTop:20 }}>
                            <Text style={{textAlign:'center', ...FontStyles.heading}}>Special place for favourite coins</Text>
                            <Text style={{textAlign:'center', ...FontStyles.tertiaryText, marginTop:10}}>Add your favourite coins and check here easily</Text>
                        </View>
                    </View>
                   
                </View>


                </ScrollView>
          
            </View>

        </SafeAreaView>

    )
}

export default Markets;