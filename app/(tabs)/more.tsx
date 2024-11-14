import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, Platform, View, Text, ScrollView } from 'react-native';
import { styles } from "../../styles/more.style"
import { profileData } from "../../constants/profileData"
import { LucideChevronRight } from 'lucide-react-native';


export default function TabTwoScreen() {
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


