import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    // backgroundColor: "aliceblue"
  },
  headerImg: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    borderRadius: 20,
  },
  headerContainer: {
    // backgroundColor: "red",
    marginVertical: 8,
  },
  headerContainerText: {
    fontSize: 32,
    fontWeight: "600",
  },
  headerContainerTxt: {
    fontSize: 16,
    paddingTop: 6,
    paddingBottom: 8,
  },
  inputContainer: {
    marginVertical: 12,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowRadius: 4,
    borderRadius: 6,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    height: "100%",
    outline: "none",
    border: "none",
  },
  icon: {
    cursor: " pointer",
  },
  forgetPass: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 14,
  },
  remember: {
    color: "blue",
    fontSize: 16,
    fontWeight: "600",
  },
  forget: {
    color: "blue",
    fontWeight: "600",
    fontSize: 16,
  },
  loginBtn: {
    backgroundColor: "blue",
    paddingVertical: 14,
    borderRadius: 12,
  },
  loginBtnTxt: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  toSignUpWrapper: {
    alignSelf: "center",
    marginVertical: 16,
  },
  toSignUp: {
    fontWeight: "600",
    fontSize: 16,
    color:"grey"
  },
  toSignUpBtn: {
    color: "blue",
    fontWeight: "600",
    fontSize: 16,
  },
  seperator:{
    alignSelf: "center"
  },
  googleBtn:{
    flexDirection: 'row',
    gap: 16,
    alignSelf: "center"

  },
  googleBtnTxt:{
    fontWeight: "bold",
    fontSize: 20
  }
});
