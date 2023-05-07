import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import React from 'react';

export default function Resep(props) {
  const { obj } = props;
  return (
    <ImageBackground source={obj.image} style={styles.cardResep}>
      <Text>{obj.title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  cardResep: {
    height: 120,
    borderRadius: 25,
  },
});
