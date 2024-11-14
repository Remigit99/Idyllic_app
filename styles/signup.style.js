import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8,
    // backgroundColor: "aliceblue"
  },
  headerImg: {
    resizeMode: "cover",
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

  signUpBtn: {
    backgroundColor: "blue",
    paddingVertical: 14,
    borderRadius: 12,
    marginVertical: 18
  },
  signUpBtnTxt: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  toLoginWrapper: {
    alignSelf: "center",
    marginVertical: 16,
  },
  toLogin: {
    fontWeight: "600",
    fontSize: 16,
    color: "grey",
  },
  toLoginBtn: {
    color: "blue",
    fontWeight: "600",
    fontSize: 16,
  },
  seperator: {
    alignSelf: "center",
  },
  googleBtn: {
    flexDirection: "row",
    gap: 16,
    alignSelf: "center",
    marginVertical: 18,
    backgroundColor: "white",
    paddingVertical: 14,
    borderRadius: 12,
    shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: "gray",
      paddingVertical: 10,
      paddingHorizontal: 10,
      shadowRadius: 4,
      width: "100%",
      justifyContent: "center"
  },
  googleBtnTxt: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
