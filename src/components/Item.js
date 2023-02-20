import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const Item = ({image, name, price}) => {
  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <Image style={styles.productImage} source={{uri: image}} />
      <View style={styles.border} />
      <View style={styles.contentContainer}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}.00</Text>
      </View>
    </LinearGradient>
  );
};

export default Item;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: "#b4b4b4",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  contentContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
  },
  border: {
    width: "90%",
    borderWidth: 0.5,
    marginVertical: 6,
    opacity: 0.3,
  },
  productImage: {
    width: 130,
    height: 110,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 18,
    color: "#862DFF",
    marginVertical: 5,
    fontWeight: "bold",
  },
  productPrice: {
    marginTop: 4,
    fontSize: 18,
    color: "#862DFF",
  },
});
