import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../screens/home";
import {ProductDetails} from "../screens/productsDetails";
import {Cart} from "../screens/cart";
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TouchableOpacity} from "react-native";
import {logout} from "../store/reducers";
import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {clearStorage} from "../utils";

const ProductsStack = createNativeStackNavigator();

const AfterLoggedIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _logoutHandler = async () => {
    await clearStorage();
    dispatch(logout());
  };
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Product",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#7763a4",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "white",
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                _logoutHandler();
              }}>
              <Ionicons name="menu" size={22} color="#7763a4" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Icon name="cart-plus" size={30} color="#7763a4" />
            </TouchableOpacity>
          ),
        }}
      />
      <ProductsStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          title: "Product",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
          headerTintColor: "#7763a4",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "white",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={22} color="#7763a4" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Icon name="cart-plus" size={30} color="#7763a4" />
            </TouchableOpacity>
          ),
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
