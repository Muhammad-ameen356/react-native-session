import React from "react";
import {useSelector} from "react-redux";
import AfterLoggedIn from "./AfterLoggedIn";
import BeforeLoggedIn from "./BeforeLoggedIn";

const Auth = () => {
  const {isLoggedIn} = useSelector(state => state.auth);
  return isLoggedIn ? <AfterLoggedIn /> : <BeforeLoggedIn />;
};

export default Auth;
