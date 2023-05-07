import { StyleSheet, View, Text, ImageBackground } from "react-native";
import React from "react";

export default function Resep(props) {
  const { Obj } = props;
  return (
    <ImageBackground source={Obj.image} style={styles.cardResep}>
      <Text>{Obj.title}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  cardResep: {
    height: 120,
    borderRadius: 25,
  },
});
