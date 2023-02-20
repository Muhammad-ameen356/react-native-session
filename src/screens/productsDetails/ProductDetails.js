import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const ProductDetail = ({navigation, route}) => {
  const {image, price, name} = route.params;

  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.firstContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{name}</Text>
            <Text style={styles.priceText}>Rs {`${price}.00`}</Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.descriptionContainer}>
            <Text>Little Description</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.quantityContainer}>
              <Text>Quantity</Text>
              <View />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.btn, styles.btn1]}
                onPress={() => navigation.navigate("Cart")}>
                <Text style={styles.btnText}>Buy Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.btn, styles.btn2]}>
                <Text style={styles.btnText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#b4b4b4",
  },
  secondContainer: {
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  priceText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#862DFF",
  },
  descriptionContainer: {
    width: "100%",
    height: "70%",
    padding: 20,
    opacity: 0.5,
  },
  bottomContainer: {
    width: "100%",
    height: "30%",
  },
  quantityContainer: {
    width: "100%",
    height: "40%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 16,
    color: "#862DFF",
  },
  btn1: {
    backgroundColor: "pink",
  },
  btn2: {
    backgroundColor: "orange",
  },
});

export default ProductDetail;
