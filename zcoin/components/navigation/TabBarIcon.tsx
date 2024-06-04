import { View , Image, Text} from "react-native"

type tabIconProps = {
  name: string,
  image : any,
  color : string
}


export const TabBarIcon = (props : tabIconProps)=>{
  return(
    <View style={{alignItems:'center', paddingVertical:20}}>
      <Image tintColor={props.color} resizeMode="contain" source={props.image}/>
      <Text style={{fontFamily:'gothamLight', color: props.color, marginTop:5}} >{props.name}</Text>
    </View>

  )

}