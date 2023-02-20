import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";

const CartItem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Image
          source={{
            uri: "https://media.naheed.pk/catalog/product/cache/17cb4734a0ff40d859ea4c0cfd876903/1/0/1056474-1.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameAndPriceText}>Panadol</Text>
          <Text style={styles.nameAndPriceText}>Rs. 36.00</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity style={styles.circleBtn}>
          <Text>i</Text>
        </TouchableOpacity>
        <Text>2</Text>
        <TouchableOpacity style={styles.circleBtn}>
          <Text>i</Text>
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
    justifyContent: "space-between",
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  firstContainer: {
    flexDirection: "row",
  },
  textContainer: {
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circleBtn: {
    width: 25,
    height: 25,
    backgroundColor: "pink",
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
