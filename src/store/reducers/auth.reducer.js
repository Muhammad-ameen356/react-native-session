import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {
  loginWithEmailAndPassword,
  loginWithFacebook,
  loginWithGoogle,
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
    loggedIn: (state, action) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder.addCase(
      signupWithEmailAndPassword.fulfilled,
      (state, {payload}) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.data = payload;
      },
    );

    builder.addCase(loginWithEmailAndPassword.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.data = payload;
    });

    builder.addCase(loginWithGoogle.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.data = payload;
    });

    builder.addCase(loginWithFacebook.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.data = payload;
    });

    builder.addMatcher(
      isAnyOf(
        loginWithEmailAndPassword.pending,
        signupWithEmailAndPassword.pending,
        loginWithGoogle.pending,
        loginWithFacebook.pending,
      ),
      state => {
        state.isLoading = true;
      },
    );
    builder.addMatcher(
      isAnyOf(
        loginWithEmailAndPassword.rejected,
        signupWithEmailAndPassword.rejected,
        loginWithGoogle.rejected,
        loginWithFacebook.rejected,
      ),
      (state, {payload}) => {
        state.isLoading = false;
        // Alert.alert("Error", payload);
      },
    );
  },
});

const {logout, loggedIn} = AuthReducer.actions;
export {logout, loggedIn};

export default AuthReducer.reducer;
