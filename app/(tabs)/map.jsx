import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from "react-native"
// import {SafeAreaView} from "react-safe-area-view-context"
import { styles } from "../../styles/login.style"
import { Mail, LockIcon, EyeClosed, Eye, Lock, Globe } from 'lucide-react-native';
import { useState } from "react";
import CheckBox from "expo-checkbox"


const Map = () => {

    const [isChecked, setIsChecked] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    return (
        <View style={styles.mainContainer}>
            <View>
                <Image style={styles.headerImg} source={require("../../assets/images/Weather.png")} />
            </View>

            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerContainerText}>Login</Text>
                    <Text style={styles.headerContainerTxt}>Please login to get your local AQI data</Text>
                </View>

                <View>
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

                    <View style={styles.forgetPass}>
                        <TouchableOpacity style={styles.rememberMain}>
                            <CheckBox
                            value={isChecked}
                            color={isChecked ? "#4630EB" : undefined}
                            onValueChange={setIsChecked}
                            />
                            <Text style={styles.remember}>Remember me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.forget}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <Pressable style={styles.loginBtn} >
                        <Text style={styles.loginBtnTxt}>Login</Text>
                    </Pressable>

                    <View style={styles.toSignUpWrapper}>
                        <Text style={styles.toSignUp}>
                            Don't have an account? <Text  style={styles.toSignUpBtn}>Sign Up</Text>
                        </Text>
                    </View>

                    <View style={styles.seperator}><Text>Or Login with</Text></View>

                    <View>
                        <TouchableOpacity style={styles.googlBtn}>
                            <Globe />
                            <Text style={styles.googlBtnTxt}>Login with Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}

export default Map;