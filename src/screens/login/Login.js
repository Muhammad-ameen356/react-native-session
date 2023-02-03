import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.headingText}>Sign up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            // onChangeText={onChangeText}
            // value={text}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter Password" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Confirm Password"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.socialButtonContainer}>
          <View style={styles.socialBtnInner1}>
            <TouchableOpacity style={styles.socialButton1}>
              <View>
                <Image
                  source={require("../../assets/images/googleImg.png")}
                  style={{width: 30, height: 30}}
                />
              </View>
              <View>
                <Text style={styles.socialBtnText}>Google</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.socialBtnInner2}>
            <TouchableOpacity style={styles.socialButton2}>
              <Image
                source={require("../../assets/images/facebookImg.png")}
                style={{width: 30, height: 30}}
              />
              <Text style={styles.socialBtnText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.alreadyAccContainer}>
          <Text style={styles.alreadyAccText}>Already have an account?</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#a3a3a3",
    paddingLeft: 8,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  label: {
    padding: 6,
    fontWeight: "bold",
  },
  headingText: {
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#613f82",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#dcc8ee",
    padding: 15,
    marginTop: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#613f82",
  },
  inputContainer: {
    marginTop: 10,
  },

  socialButtonContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialBtnInner1: {
    width: "50%",
    padding: 5,
    display: "flex",
    justifyContent: "space-around",
  },
  socialBtnInner2: {
    width: "50%",
    padding: 5,
    display: "flex",
    justifyContent: "space-around",
  },
  socialButton1: {
    borderWidth: 2,
    borderColor: "#a9c7cd",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialButton2: {
    borderWidth: 2,
    borderColor: "#a9c7cd",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialBtnText: {
    textAlign: "center",
    color: "#a9c7cd",
    fontSize: 16,
  },
  // socialBtnText2: {
  //   textAlign: "center",
  //   color: "#a9c7cd",
  //   fontSize:
  // },

  alreadyAccContainer: {
    marginTop: 25,
  },
  alreadyAccText: {
    textAlign: "center",
    color: "#613f82",
    fontSize: 16,
  },
});

export default Login;
