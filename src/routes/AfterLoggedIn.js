import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../screens/home";
import {ProductDetails} from "../screens/productsDetails";
import {Cart} from "../screens/cart";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native";
import {logout} from "../store/reducers";
import {useDispatch} from "react-redux";

const ProductsStack = createNativeStackNavigator();

const AfterLoggedIn = () => {
  const dispatch = useDispatch();
  const _logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackTitleVisible: false,
          headerRight: () => (
            <TouchableOpacity onPress={_logoutHandler}>
              <Icon name="power-off" size={30} color="#900" />
            </TouchableOpacity>
          ),
        }}
      />
      <ProductsStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <ProductsStack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </ProductsStack.Navigator>
  );
};

export default AfterLoggedIn;
