import React, {useEffect} from "react";
import HelloWorld from "./src/components/HelloWorld";
import SplashScreen from "react-native-splash-screen";
import Login from "./src/screens/login/Login";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Login />;
}
