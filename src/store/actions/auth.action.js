import auth from "@react-native-firebase/auth";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AccessToken, LoginManager} from "react-native-fbsdk-next";
import {API_URLS} from "../../constants";

const signupWithEmailAndPassword = createAsyncThunk(
  "auth/signup",
  async ({data}, {rejectWithValue}) => {
    try {
      const res = await axios({
        method: "POST",
        url: API_URLS.AUTH.SIGNUP_WITH_EMAIL_PASSWORD,
        data,
      });
      console.log(res.data);
      return res?.data;
    } catch (err) {
      console.log(err.response.data.error.errors[0].message);
      return rejectWithValue(err.response.data.error.errors[0].message);
    }
  },
);

const loginWithEmailAndPassword = createAsyncThunk(
  "auth/login",
  async ({data}, {rejectWithValue}) => {
    try {
      const res = await axios({
        method: "POST",
        url: API_URLS.AUTH.LOGIN_WITH_EMAIL_PASSWORD,
        data,
      });
      console.log(res.data);
      return res?.data;
    } catch (err) {
      // console.log(err.response.data.error.errors[0].message);
      return rejectWithValue("error");
    }
  },
);

const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, {rejectWithValue}) => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      const credential = await auth().signInWithCredential(googleCredential);
      console.log(credential);
      return credential;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const loginWithFacebook = createAsyncThunk(
  "auth/loginWithFacebook",
  async (_, {rejectWithValue}) => {
    try {
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);
      if (result.isCancelled) {
        // throw "User cancelled the login process";
        return rejectWithValue("User cancelled the login process");
      }

      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        // throw "Something went wrong obtaining access token";
        return rejectWithValue("Something went wrong obtaining access token");
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );

      // Sign-in the user with the credential
      const authCredential = auth().signInWithCredential(facebookCredential);
      authCredential.then(res => {
        return res;
      });
      return authCredential;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

const signOut = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, {rejectWithValue}) => {
    try {
      const signOutFunction = auth()
        .signOut()
        .then(test => {
          console.log(test, "test");
          return "User signed out!";
        });
      return signOutFunction;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export {
  signupWithEmailAndPassword,
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithFacebook,
  signOut,
};
