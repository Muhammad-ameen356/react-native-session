import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {useDispatch, useSelector} from "react-redux";
import {
  loginWithEmailAndPassword,
  loginWithFacebook,
  loginWithGoogle,
} from "../../store/actions";
import {GoogleSignin} from "@react-native-google-signin/google-signin";

const Login = ({navigation}) => {
  const {isLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    Platform.OS === "android" &&
      GoogleSignin.configure({
        webClientId:
          "537044822847-0s6fqjokgn34sp6gaorph4akq4d2ifmr.apps.googleusercontent.com",
      });
  }, []);

  const _loginHandler = () => {
    const data = {
      email,
      password,
    };
    dispatch(loginWithEmailAndPassword({data}));
  };

  const onGoogleButtonPress = async () => {
    dispatch(loginWithGoogle());
  };

  const onFacebookLogin = async () => {
    dispatch(loginWithFacebook())
      .unwrap()
      .then(originalPromiseResult => {
        console.log(originalPromiseResult, "originalPromiseResult");
      });
  };

  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.innerFirstContainer}>
          <View>
            <Text style={styles.headingText}>Sign In</Text>
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
              value={password}
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isLoading ? "#F8EBFF" : "#dcc8ee"},
            ]}
            onPress={_loginHandler}
            disabled={isLoading}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <View style={styles.socialButtonContainer}>
            <View style={styles.socialBtnInner1}>
              <TouchableOpacity
                style={styles.socialButton1}
                onPress={onGoogleButtonPress}>
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
              <TouchableOpacity
                style={styles.socialButton2}
                onPress={onFacebookLogin}>
                <Image
                  source={require("../../assets/images/facebookImg.png")}
                  style={styles.iconImage}
                />
                <Text style={styles.socialBtnText}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.innerSecondContainer}>
          <View style={styles.alreadyAccContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.alreadyAccText}>
                Don't you have an account
              </Text>
            </TouchableOpacity>
          </View>
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
  innerFirstContainer: {
    height: "88%",
    display: "flex",
    justifyContent: "center",
  },
  innerSecondContainer: {
    height: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    // marginTop: 25,
  },
  alreadyAccText: {
    textAlign: "center",
    color: "#613f82",
    fontSize: 16,
  },
});

export default Login;
