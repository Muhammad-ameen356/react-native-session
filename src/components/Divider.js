import {StyleSheet, Text, View} from "react-native";
import React from "react";

const Divider = () => {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  divider: {
    width: "100%",
    borderColor: "black",
    borderWidth: 0.3,
    opacity: 0.5,
  },
});
