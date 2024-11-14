import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from "../../styles/more.style"
import { profileData } from "../../constants/profileData"
import { LucideChevronRight } from 'lucide-react-native';
import   {useState, useRef} from "react"

import { Modalize } from 'react-native-modalize';


export default function TabTwoScreen() {

  const modalizeRef = useRef<Modalize>(null)

  const onOpen = () =>{
    modalizeRef.current?.open()
  }



  return (
    <ScrollView>

      <View style={styles.profileHeader}>
        <View style={styles.profileHeaderMain}>
          <Image source={require("../../assets/images/my_profile_img.png")}
            style={styles.profileImg}
          />

          <Text style={styles.userName}>Aderemi Abiodun</Text>
          <Text style={styles.userEmail}>deremidev@gmail.com</Text>

        </View>
      </View>

      <TouchableOpacity onPress ={onOpen}>
        <Text>
          Show Modal from Modalize
        </Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef}>
        <Text>Modalized  contents</Text>
      </Modalize>

      <ScrollView style={styles.profileMain}>
        {
          profileData.map(item =>
            <View key={item.id} style={styles.profileItem}>

              <View style={styles.profileItemLeft}>
                <View>{item.icon}</View>
                <Text style={styles.profileItemTitle}>
                  {item.title}
                </Text>
              </View>
              <LucideChevronRight color={"blue"} size={25}/>



            </View>
          )
        }
      </ScrollView>

    </ScrollView>


  );
}


