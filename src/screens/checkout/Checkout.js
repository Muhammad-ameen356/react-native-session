import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import {Divider} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {clearCart} from "../../store/reducers";

const Checkout = ({navigation}) => {
  const {cart, total} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const onFinish = () => {
    navigation.navigate("Home");
    dispatch(clearCart());
  };
  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <View style={styles.innerMainContainer}>
        <View style={styles.firstContainer}>
          <View>
            <Text style={styles.deliveryAddTxt}>Delivery Address</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Street Address" />
            <TextInput style={styles.input} placeholder="Phone" />
            <View style={styles.twoInput}>
              <TextInput
                style={[styles.input, styles.input1]}
                placeholder="City"
              />
              <TextInput
                style={[styles.input, styles.input2]}
                placeholder="Country"
              />
            </View>
          </View>
          <View style={styles.dividerContainer}>
            <Divider />
          </View>
          <View>
            <Text style={styles.payMethodHeadTxt}>Payment Method</Text>
            <Text style={styles.payMethodTxt}>Cash on delivery</Text>
          </View>
          <View style={styles.dividerContainer}>
            <Divider />
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalTxt}>Total</Text>
            <Text style={styles.totalTxt}>Rs. {total}</Text>
          </View>

          <TouchableOpacity
            onPress={onFinish}
            disabled={Object.values(cart).length ? false : true}
            style={[
              styles.checkoutButton,
              Object.values(cart).length
                ? {backgroundColor: "#EBC2FF"}
                : {backgroundColor: "#C3B0CD"},
            ]}>
            <Text style={styles.checkoutBtnText}>Finish Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  innerMainContainer: {
    marginHorizontal: 20,
    justifyContent: "center",
  },
  firstContainer: {
    height: "82%",
    paddingTop: 30,
  },
  inputContainer: {
    marginHorizontal: 10,
  },
  twoInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input1: {
    width: "48%",
  },
  input2: {
    width: "48%",
  },
  deliveryAddTxt: {
    fontSize: 20,
    color: "black",
  },
  input: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#faf0ff",
    borderRadius: 8,
  },
  dividerContainer: {
    marginVertical: 30,
  },
  payMethodHeadTxt: {
    color: "black",
    fontSize: 22,
  },
  payMethodTxt: {
    color: "black",
    fontSize: 18,
    marginVertical: 15,
  },
  secondContainer: {
    width: "100%",
    height: "18%",
    justifyContent: "space-between",
  },
  totalPriceContainer: {
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
    fontSize: 18,
    fontWeight: "bold",
  },
  totalTxt: {
    fontSize: 20,
    color: "#613f82",
    fontWeight: "bold",
  },
});
