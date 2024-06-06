
import { SafeAreaView } from "react-native-safe-area-context";
import {View, Text, ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from "../style";
import { COLORS } from "@/constants/Colors";
import FontStyles from "@/constants/sizes";

const Profile = ()=>{
    return(
        <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} style={{paddingBottom:20}}>
        
                <View style={style.modal}>
                    <View>
                        <Image style={style.image} source={require('../../assets/images/avater.png')}/>
                        <Text style={style.primaryText}>Suberu M Adefolarin</Text>
                    </View>
                    <View>
                        <Text style={style.text2}>suberufolarin@gmail.com</Text>
                        <Text style={style.text2}>+2348148676947</Text>
                    </View>
                </View>

                <View style={style.container}>

                    <TouchableOpacity style={style.card}>
                        <View style={style.card2}>
                            <Image source={require('../../assets/images/history.png')}/>
                            <Text style={style.text}>History</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/arrow.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.card}>
                        <View  style={style.card2}>
                            <Image source={require('../../assets/images/bank.png')}/>
                            <Text style={style.text}>Bank Details</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/arrow.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.card}>
                        <View  style={style.card2}>
                            <Image source={require('../../assets/images/notification.png')}/>
                            <Text style={style.text}>Notifications</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/arrow.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.card}>
                        <View  style={style.card2}>
                            <Image source={require('../../assets/images/security.png')}/>
                            <Text style={style.text}>Security</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/arrow.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.card}>
                        <View  style={style.card2}>
                            <Image source={require('../../assets/images/hns.png')}/>
                            <Text style={style.text}>Help and Support</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/arrow.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.card}>
                        <View  style={style.card2}>
                            <Image source={require('../../assets/images/tnc.png')}/>
                            <Text style={style.text}>Terms and Conditions</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/images/arrow.png')}/>
                        </View>
                    </TouchableOpacity>

                </View>

            </ScrollView>    

        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    text:{
        color:COLORS.secondaryText,
        fontSize:18,
        fontFamily:'std',
        marginLeft:20

    },
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingBottom:25,
        borderBlockColor:'#DFE2E4',
        borderBottomWidth:1,
        alignItems:'center',
        marginVertical:15

    },
    modal:{
        backgroundColor:COLORS.primary,
        padding:20,
        borderRadius:12,
        justifyContent:'center',
        marginTop:20

    },
    primaryText:{
        color:'white', 
        fontFamily:'std', 
        fontWeight:'700', 
        fontSize:20,
        textAlign:'center'

    },
    text2:{
        textAlign:'center',
        color:COLORS.white,
        fontFamily:'std',
        fontSize:12,
        marginVertical:2
      
    },
    card2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    image:{
        alignSelf:'center',
        marginBottom:10
    },
    container:{
        marginTop:20
    }
})

export default Profile;