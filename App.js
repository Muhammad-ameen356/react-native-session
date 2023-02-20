import React, {useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
import {NavigationContainer} from "@react-navigation/native";
import {Auth} from "./src/routes";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
}
