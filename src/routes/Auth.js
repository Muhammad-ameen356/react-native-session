import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loggedIn} from "../store/reducers";
import {getDataFromLocalStorage} from "../utils";
import AfterLoggedIn from "./AfterLoggedIn";
import BeforeLoggedIn from "./BeforeLoggedIn";

const Auth = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      const token = await getDataFromLocalStorage("token");
      if (token) {
        dispatch(loggedIn());
      }
    };
    getToken();
  }, []);
  return isLoggedIn ? <AfterLoggedIn /> : <BeforeLoggedIn />;
};

export default Auth;
