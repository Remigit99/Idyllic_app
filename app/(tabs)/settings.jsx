import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from "react-native"
// import {SafeAreaView} from "react-safe-area-view-context"
import { styles } from "../../styles/signup.style"
import { Mail, LockIcon, EyeClosed, Eye, Lock, Globe, User } from 'lucide-react-native';
import { useState } from "react";


const Settings = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <View>
                <Image style={styles.headerImg} source={require("../../assets/images/Weather_2.png")} />
            </View>

            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerContainerText}>Sign Up</Text>
                    <Text style={styles.headerContainerTxt}>Please Sign up to get your local AQI data</Text>
                </View>

                <View>


                    <View style={styles.inputContainer}>
                        <User />
                        <TextInput style={styles.input} placeholder="Name" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Mail />
                        <TextInput style={styles.input} placeholder="Email" />
                    </View>

                    <View style={styles.inputContainer}>
                        <Lock />
                        <TextInput style={styles.input} placeholder="Password"
                            secureTextEntry={!showPassword}
                            onChangeText={(pass) => setShowPassword(pass)}
                        />
                        {
                            showPassword ?
                                <Eye style={styles.icon} onPress={() => setShowPassword(!showPassword)} /> :
                                <EyeClosed style={styles.icon} onPress={() => setShowPassword(!showPassword)} />
                        }


                    </View>

                    <Pressable style={styles.signUpBtn} >
                        <Text style={styles.signUpBtnTxt}>Sign Up</Text>
                    </Pressable>

                    <View style={styles.toLoginWrapper}>
                        <Text style={styles.toLogin}>
                            Have an account? <Text  style={styles.toLoginBtn}>Login</Text>
                        </Text>
                    </View>

                    <View style={styles.seperator}><Text>Or Sign Up with</Text></View>

                    <View>
                        <TouchableOpacity style={styles.googleBtn}>
                            <Globe />
                            <Text style={styles.googleBtnTxt}>Sign Up with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Settings;