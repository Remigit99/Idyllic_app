import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import {styles} from "../../styles/home.style"
import { HelloWave } from '@/components/HelloWave';
import { useState, useEffect } from 'react';
import { err } from 'react-native-svg';


export default function HomeScreen() {

const [isChecked, setIsChecked] = useState(true)

const [weatherData, setWeatherData] = useState([])

useEffect( () =>{

  const fetchData=  async () =>{

    try {
      const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=${process.env.OPEN_WEATHER_API}`)
    console.log(process.env.OPEN_WEATHER_API)
      const resp = await data.json()
      console.log(resp)
      setWeatherData(resp)
      
    } catch (error) {
      console.log(error)
    }

   
  }

  fetchData()

},[])


  return (
   
    <ScrollView>
      <View style={styles.titleContainer}>
        <View style={styles.titleContainerMain}>
        <Text style={styles.welcomeTxt}>Welcome Back!</Text>
        <HelloWave />
        </View>
        <Text style={styles.username}>Aderemi Abiodun</Text>

        <View>
          <View>
            <Text>Air Quality</Text>
            <Text>more</Text>
          </View>

          <View></View>

        </View>
        <Checkbox 
        style={styles.checkBox}
        value={isChecked}
        onValueChange={setIsChecked}
        color={isChecked ? "#4630EB": undefined}
        />
      </View>


      <View>
        {
          JSON.stringify(weatherData)
        }
      </View>
      
     
     <Text>
      {
        process.env.OPEN_WEATHER_API
      }
     </Text>


    </ScrollView>
  );
}


