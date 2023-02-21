import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
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
      console.log(err.response.data.error.errors[0].message);
      return rejectWithValue(err.response.data.error.errors[0].message);
    }
  },
);

export {signupWithEmailAndPassword, loginWithEmailAndPassword};
