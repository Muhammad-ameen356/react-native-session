import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../screens/home";
import {ProductDetails} from "../screens/productsDetails";
import {Cart} from "../screens/cart";

const ProductsStack = createNativeStackNavigator();

const AfterLoggedIn = () => {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="Home"
        component={Home}
        options={{
          headerBackTitleVisible: false,
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
