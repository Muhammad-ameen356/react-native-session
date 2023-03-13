import React, {useEffect} from "react";
import SplashScreen from "react-native-splash-screen";
import {NavigationContainer} from "@react-navigation/native";
import {Auth} from "./src/routes";
import {Provider} from "react-redux";
import store from "./src/store";

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Auth />
      </NavigationContainer>
    </Provider>
  );
}
