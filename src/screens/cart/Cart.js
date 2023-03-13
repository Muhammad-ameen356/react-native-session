import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {CartItem} from "../../components";
import {useSelector} from "react-redux";

const Cart = ({navigation}) => {
  const {cart, total} = useSelector(state => state.cart);

  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.firstContainer}>
          {Object.values(cart).length ? (
            Object.values(cart)?.map((item, index) => {
              return (
                <View key={index}>
                  <CartItem item={item} />
                </View>
              );
            })
          ) : (
            <Text style={{fontSize: 20}}>No item in your cart</Text>
          )}
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.totalPriceContainer}>
            <Text>Total</Text>
            <Text>Rs. {total}</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("checkout")}
            disabled={Object.values(cart).length ? false : true}
            style={[
              styles.checkoutButton,
              Object.values(cart).length
                ? {backgroundColor: "#EBC2FF"}
                : {backgroundColor: "#C3B0CD"},
            ]}>
            <Text style={styles.checkoutBtnText}>Proceed To Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstContainer: {
    width: "100%",
    height: "75%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  secondContainer: {
    width: "100%",
    height: "25%",
    justifyContent: "space-between",
    padding: 25,
  },
  totalPriceContainer: {
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: "#000",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkoutButton: {
    width: "100%",
    padding: 20,
    borderRadius: 3,
    marginVertical: 10,
  },
  checkoutBtnText: {
    textAlign: "center",
    fontSize: 16,
  },
});
