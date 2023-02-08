import React, {useEffect, useState} from "react";
import HelloWorld from "./src/components/HelloWorld";
import SplashScreen from "react-native-splash-screen";
import Signup from "./src/screens/signup/Signup";
import Login from "./src/screens/login/Login";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <Login setIsLogin={setIsLogin} />
  ) : (
    <Signup setIsLogin={setIsLogin} />
  );
}
