import { SafeAreaView } from "react-native-safe-area-context"
import {Text, View, ScrollView,TouchableOpacity, FlatList, Image, StyleSheet} from 'react-native'
import styles from "../style";
import FontStyles from "@/constants/sizes";
import { COLORS } from "@/constants/Colors";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const Home = ()=>{

  const queryClient = useQueryClient();

  const getCoins = async ()=> {
    const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
     return result.data.coins;
    } catch (error) {
      console.error(error);
    }

  }

  const {data, isSuccess, isLoading} = useQuery({queryKey: ['data'], queryFn :getCoins})



  return(
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor:COLORS.primary, paddingVertical:20, borderRadius:8, marginVertical:20, paddingLeft:20}}>
        <Text style={{fontFamily:'std', fontSize:12, color:COLORS.white, marginBottom:10}}>Welcome, Micheal!</Text>
        <Text style={{...FontStyles.heading, color:COLORS.white, fontSize:18}}>Make your first investment today</Text>
        <TouchableOpacity style={{backgroundColor:COLORS.white, borderRadius:8, width:120, padding:10, marginTop:20}}>
          <Text style={{color:COLORS.primary, fontFamily:'std', textAlign:'center'}}>Invest Today</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{...FontStyles.heading}}>Trending Coins</Text>
      </View>

      <FlatList
       data={data} 
       showsVerticalScrollIndicator={false}
       renderItem={(data)=>{
        return(
          <View style={{marginBottom:20, backgroundColor:COLORS.white, padding:20, borderRadius:8}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{flexDirection:'row'}}>
              <Image source={{uri:data.item.iconUrl}} resizeMode="contain" height={40} width={40}/>
              <View style={{marginLeft:10}}>
                {/* <Text>{data.item.iconUrl} </Text> */}
                <Text style={{...FontStyles.primaryText, marginBottom:5}}>{data.item.name}</Text>
                <Text style={{...FontStyles.tertiaryText}}>{data.item.symbol}</Text>
              </View>

              </View>

              <View style={{alignItems:'flex-end'}}>
                <Text style={{...FontStyles.secondaryText, marginBottom:5}}>{`$${Math.floor(Number(data.item.price))}`}</Text>
                <Text style={{...FontStyles.tertiaryText,color: data.item.change.split('')[0] =="-"? 'red': 'green'}}>{`${Math.floor(Number(data.item.change)*100)}%`}</Text>
              </View>
            

            </View>

          </View>
        )
       }}

      

       style={{marginVertical:20}}
      />


  
     
    </SafeAreaView>
  )
}



export default Home;