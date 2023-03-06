import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "../screens/home";
import {ProductDetails} from "../screens/productsDetails";
import {Cart} from "../screens/cart";
import Icon from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native";
import {logout} from "../store/reducers";
import {useDispatch} from "react-redux";
import {signOut} from "../store/actions";
import {useNavigation} from "@react-navigation/native";

const ProductsStack = createNativeStackNavigator();

const AfterLoggedIn = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const _logoutHandler = () => {
    dispatch(signOut())
      .unwrap()
      .then(_ => {
        dispatch(logout());
      });
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
              <Icon name="power-off" size={30} color="#7763a4" />
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
