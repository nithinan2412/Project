import  React  from 'react';
import { View, Text }   from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from 'react-native-chart-kit'
import { Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { labeledStatement } from '@babel/types';
import { useEffect, useState } from 'react';
import  Axios  from 'axios';
import { UseUser } from '../context/User';
import apiurl from "../config/api"
const screenWidth = Dimensions.get("window").width;
import moment from 'moment';
import 'moment/min/locales'

moment.locale('th')






const chartpieConfig = {
  backgroundGradientFrom: "#E0BBE4",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "#E0BBE4",
  backgroundGradientToOpacity: 1,
  color: (opacity = 0) => `rgba(31, 204, 183, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
  labelColor: () => `#000`
};


const chartConfig = {
    backgroundGradientFrom: "#E0BBE4",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#E0BBE4",
    backgroundGradientToOpacity: 1,
    color: () => `#000`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, 
    
  };

 
  

  
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  
    datasets: [
      {
        data: [5, 2, 3, 4, 5],
        color: () => `#3378E6`,
        strokeWidth: 3 // optional
      }
    ],
 
    // optional
  };

  const getRandomRgb = (opacity) => {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgba(' + r + ', ' + g + ', ' + b + ', '+opacity+')';
   
  }




  const ChartScreen = ({ navigation } ) => {
    const [usetime, setUsetime] = useState([])
    const [vote, setVote] = useState([])
    const users = UseUser()
    const [cnt, setCnt] = useState([])
    
 
    
    const usechart = () => {
      Axios.get(apiurl + "/chart/usetime?userid="+ users.userid).then((response) => {
       setUsetime( response.data.map((item) =>{
          return  moment(item.usetime).format('D MMM')
          
        }))
        setVote( response.data.map((item) =>{
          return item.vote
          
        }))
        
      });
    };
    useEffect(()=>{
      usechart()
    },[])


    const usechart2 = () => {
      Axios.get(apiurl + "/chart/usetime2?userid="+ users.userid).then((response) => {
        const sumall = response.data.reduce((prev, item)=>{
          return prev + item.cnt


        },0)
        setCnt(response.data.reduce((prev, item) =>{
          if(item.period < 15*60)
          {
            prev[0] += item.cnt
          }else if(item.period >= 15*60 && item.period <= 30*60)
          {
            prev[1] += item.cnt
          }else if(item.period >= 31*60 && item.period <= 45*60)
          {
            prev[2] += item.cnt
          }else
          {
            prev[3] += item.cnt
          }
          return prev


        },[0, 0, 0, 0]).map((item) =>{
          return item/sumall
        })
        )
      });
    };



    useEffect(()=>{
      
      usechart2()

    },[])


    
   

return(
    <View style={{backgroundColor:'pink'}}>
        <View style={{marginVertical: 25,justifyContent:'center',flexDirection:'row'}}>
            <Text style={{color:'white',fontSize: 30, fontWeight: 'bold'}}>การฟโดยรวม

            </Text>
        </View>

        <LineChart
   formatYLabel={ (y) =>{

    if(y == 1)
    return 'แย่มาก'
    else if(y == 2)
    return 'แย่'
    else if(y == 3)
    return 'ก็โอเคร'
    else if(y == 4)
    return 'ดีขึ้น'
    else if(y == 5)
    return 'ดีขึ้นมากก'
    

    return '' 

  }}
  
  
  data={{...data,
    labels:usetime, 
    datasets: [ {
    data: vote,
    color: () => `#3378E6`,
    strokeWidth: 3 // optional
  }]}}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  style={{borderRadius: 25}}
/>


<View style={{height: 500,backgroundColor:'pink'}}>

<View style={{top: 50}}>

<ProgressChart
  
  chartConfig={{ backgroundColor: '#000000',
  backgroundGradientFrom: '#1E2923',
  backgroundGradientTo: '#08130D',
  color: (opacity = 0) => `rgba(31, 128, 183, ${opacity})`,
  style: {borderRadius: 16}
}}
  data={{
    labels: ["< 15 นาที","15-30 นาที","31-45 นาที","> 45 นาที"], 
    data: cnt,
    
}}
  width={screenWidth}
  height={220}
  strokeWidth={16}
  radius={32}
  hideLegend={false}
  style={{borderRadius: 25}}
  
/>
</View>
</View>




    </View>




    );};

    export default ChartScreen;

