import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {Signup} from "../screens/signup";
import {Login} from "../screens/login";

const {Navigator, Screen} = createNativeStackNavigator();

const hideHeader = {
  headerShown: false,
};

const BeforeLoggedIn = () => {
  return (
    <Navigator>
      <Screen name="Login" component={Login} options={{...hideHeader}} />
      <Screen name="Signup" component={Signup} options={{...hideHeader}} />
    </Navigator>
  );
};

export default BeforeLoggedIn;
