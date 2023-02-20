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
import {medicineArr} from "../../constants/mock";

const Cart = () => {
  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.firstContainer}>
          <FlatList
            data={medicineArr}
            renderItem={({item}) => (
              <View style={{paddingVertical: 15}}>
                <CartItem />
              </View>
            )}
            keyExtractor={item => `${item.id}`}
          />
          {/* <CartItem />
          <CartItem />
          <CartItem /> */}
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.totalPriceContainer}>
            <Text>Total</Text>
            <Text>Rs. 176.00</Text>
          </View>

          <TouchableOpacity style={styles.checkoutButton}>
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
    backgroundColor: "#EBC2FF",
    padding: 20,
    borderRadius: 3,
    marginBottom: 10,
  },
  checkoutBtnText: {
    textAlign: "center",
    fontSize: 16,
  },
});
