import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {useDispatch} from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../store/reducers";
import AntIcon from "react-native-vector-icons/AntDesign";

const CartItem = ({item}) => {
  const {data} = item;
  const dispatch = useDispatch();

  const decreaseQuantityFunction = item => {
    if (item.counting === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(decreaseQuantity(item));
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Image
          source={{
            uri: data.image,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameAndPriceText}>{data?.name}</Text>
          <Text style={styles.nameAndPriceText}>Rs. {data?.price}</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity
          style={[styles.circleBtn]}
          onPress={() => decreaseQuantityFunction(item)}>
          <AntIcon name="minuscircleo" size={24} style={{color: "#7763a4"}} />
        </TouchableOpacity>
        <Text>{item?.counting}</Text>
        <TouchableOpacity
          style={[styles.circleBtn, styles.plusCircle]}
          onPress={() => dispatch(increaseQuantity(item))}>
          <AntIcon name="pluscircle" size={24} style={{color: "#7763a4"}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",

    marginTop: 10,
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  firstContainer: {
    flexDirection: "row",
    width: "70%",
  },
  textContainer: {
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  circleBtn: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    margin: 16,
  },
  nameAndPriceText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
