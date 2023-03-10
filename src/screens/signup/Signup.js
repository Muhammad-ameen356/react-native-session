import React, {useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useDispatch} from "react-redux";
import {signupWithEmailAndPassword} from "../../store/actions";
import {saveOnLocalStorage} from "../../utils";

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _handleSignup = () => {
    const data = {
      email,
      password,
    };
    dispatch(signupWithEmailAndPassword({data}))
      .unwrap()
      .then(async result => {
        await saveOnLocalStorage({key: "token", value: result?.idToken});
      });
  };
  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.headingText}>Sign up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="Full name" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Confirm Password"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={_handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.socialButtonContainer}>
          <View style={styles.socialBtnInner1}>
            <TouchableOpacity style={styles.socialButton1}>
              <View>
                <Image
                  source={require("../../assets/images/googleImg.png")}
                  style={styles.iconImage}
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
                style={styles.iconImage}
              />
              <Text style={styles.socialBtnText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.alreadyAccContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.alreadyAccText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gradient: {
    width: "80%",
  },
  innerContainer: {
    width: "80%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#a3a3a3",
    paddingVertical: 15,
    paddingRight: 15,
    paddingLeft: 8,
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
    fontSize: 16,
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

  iconImage: {
    width: 30,
    height: 30,
  },

  alreadyAccContainer: {
    marginTop: 25,
  },
  alreadyAccText: {
    textAlign: "center",
    color: "#613f82",
    fontSize: 16,
  },
});

export default Signup;
