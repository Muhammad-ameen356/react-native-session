import {FlatList, SafeAreaView, StyleSheet} from "react-native";
import React from "react";
import {medicineArr} from "../../constants/mock";
import Item from "../../components/Item";
import LinearGradient from "react-native-linear-gradient";

const Home = () => {
  const onEndReached = () => {
    console.log("abcd");
  };
  return (
    <LinearGradient
      colors={["#ffffff", "#faf0ff"]}
      style={styles.mainContainer}>
      <SafeAreaView>
        <FlatList
          style={styles.flatList}
          data={medicineArr}
          renderItem={({item}) => (
            <Item image={item.image} name={item.name} price={item.price} />
          )}
          keyExtractor={item => `${item.id}`}
          numColumns={2}
          onEndReached={onEndReached}
          // ListFooterComponent={}
          // refreshing={}
          onEndReachedThreshold={0.5}
          columnWrapperStyle={styles.flatListContentStyle}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatList: {
    marginVertical: 12,
    padding: 12,
  },
  flatListContentStyle: {
    justifyContent: "space-around",
    marginBottom: 16,
  },
});
