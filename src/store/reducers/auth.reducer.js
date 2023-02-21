import {createSlice} from "@reduxjs/toolkit";
import {Alert} from "react-native";
import {
  loginWithEmailAndPassword,
  signupWithEmailAndPassword,
} from "../actions";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  data: {},
};

const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(signupWithEmailAndPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signupWithEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(signupWithEmailAndPassword.rejected, (state, {payload}) => {
      state.isLoading = false;
      Alert.alert("Error", payload);
    });

    builder.addCase(loginWithEmailAndPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });
    builder.addCase(loginWithEmailAndPassword.rejected, (state, {payload}) => {
      state.isLoading = false;
      Alert.alert("Error", payload);
    });
  },
});

const {logout} = AuthReducer.actions;
export {logout};

export default AuthReducer.reducer;
