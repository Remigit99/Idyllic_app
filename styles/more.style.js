import {StyleSheet} from "react-native"


export const styles = StyleSheet.create({
    profileHeader:{
        alignSelf:"center",
        marginTop:30  
        ,
    },
    profileHeaderMain:{
        justifyContent:" center",
        alignItems: "center"
    },
    profileImg:{
        borderRadius: "50%",
        width: 150,
        height: 150
    },
    userName:{
        fontSize: 24,
        marginVertical: 8,
        fontWeight: "700",
    },
    userEmail:{
fontSize: 16
    },
    profileMain:{
        marginTop: 22
    },
    profileItem:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: "white",
        marginVertical: 10,
        marginHorizontal: 14,
        borderRadius: 12
    },
    profileItemLeft:{
        flexDirection: "row",
        alignItems: "center",
        gap: 16
    },
    profileItemTitle:{
        fontSize: 18,
        fontWeight:"600"
    }
  });