import React, {useEffect, useState} from "react";
import SplashScreen from "react-native-splash-screen";
import Signup from "./src/screens/signup/Signup";
import Login from "./src/screens/login/Login";
import Home from "./src/screens/home/Home";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    // <Login setIsLogin={setIsLogin} />
    <Home />
  ) : (
    <Signup setIsLogin={setIsLogin} />
  );
}
