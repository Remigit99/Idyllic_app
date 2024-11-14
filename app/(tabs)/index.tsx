import { Image, StyleSheet, Platform, View, Text, ScrollView } from 'react-native';

import {styles} from "../../styles/home.style"
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
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
      </View>
     


    </ScrollView>
  );
}


