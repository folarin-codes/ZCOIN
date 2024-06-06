import { TouchableOpacity, Text, StyleSheet } from "react-native";
import FontStyles from "@/constants/sizes";

type buttonProp = { 
    buttonText : string,
    buttonStyles: {
        backgroundColor: string,
        borderColor: string,
        width?:number

    },
    textColor: string


}


const Button = (prop:buttonProp)=>{
    return(

        <TouchableOpacity style={{borderRadius:5, ...prop.buttonStyles, paddingVertical:12, borderWidth:1, borderColor:prop.buttonStyles.borderColor}}>
            <Text style={{textAlign:'center', ...FontStyles.primaryText,color:prop.textColor}}>{prop.buttonText}</Text>

        </TouchableOpacity>

    )
};



export default Button;