
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import styles from "../style";
import { COLORS } from "@/constants/Colors";
import FontStyles from "@/constants/sizes";

const {width} = Dimensions.get('window')

const Rewards = ()=>{

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom:40}}>
                <View style={styles2.card}>
                    <Text style={styles2.mainText}>Coupons</Text>
                    <View style={styles2.card2}>
                        <Text style={styles2.text}>No. of Coupons Won</Text>
                        <Text style={[styles2.text2]}>06</Text>
                    </View>
                    <View style={styles2.card2}>
                        <Text style={styles2.text}>Tokens on from Spin so far  </Text>
                        <Text style={[styles2.text2, {color:COLORS.primary}]}>08</Text>
                    </View>
                    <View style={styles2.card2}>
                        <Text style={styles2.text}>Remaining Coupons to Spin </Text>
                        <Text style={[styles2.text2, {color:COLORS.primary}]}>01</Text>
                    </View>
                </View>

                <View style={styles2.card}>
                    <Text style={styles2.mainText}>Referral</Text>
                    <View style={styles2.card2}>
                        <Text style={styles2.text}>Total No of referrals </Text>
                        <Text style={styles2.text2}>12</Text>
                    </View>
                    <View style={styles2.card2}>
                        <Text style={styles2.text}>Total No of Qualified referral </Text>
                        <Text style={[styles2.text2 , {color:COLORS.primary}]}>05</Text>
                    </View>
                </View>
                <View style={{marginTop:10 }}>
                    <Image style={styles2.image}  source={require('../../assets/images/banner1.png')}/>
                    <Image style={styles2.image}  source={require('../../assets/images/banner2.png')}/> 
                    <Image style={styles2.image}  source={require('../../assets/images/banner3.png')}/>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}


const styles2 = StyleSheet.create({
    card:{
        backgroundColor:COLORS.white,
        borderRadius:8,
        padding:10,
        marginVertical:10
    },
    mainText:{
        color:COLORS.primaryText,
        fontFamily:'std',
        fontWeight:'700',
        fontSize:20,
        marginVertical:10
    },
    card2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5,
    },
    text:{
        ...FontStyles.tertiaryText
    },
    text2:{
        fontSize:14,
        color:COLORS.secondaryText,
        fontFamily:'std'
    },
    image:{
        width:width,
        marginVertical:10,
        borderRadius:8

    }
})

export default Rewards;