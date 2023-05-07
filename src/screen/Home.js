import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Resep from './_components/Resep';

export default function Home() {
  const navigation = useNavigation();
  const popularRecipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      image: require('../../img/bg.jpg'),
      time: '2 hours ago',
      retweets: 12,
      likes: 53,
    },
    {
      id: 2,
      name: 'Cheeseburger',
      image: require('../../img/bg.jpg'),
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btn_container}>
          <TextInput style={styles.searceinput} placeholder='Search' />
          <TextInput style={styles.searceinput} placeholder='Searce' />
        </View>
        <View style={styles.profile}>
          <Image
            source={require('../../img/foto.png')}
            style={styles.profileImage}
          />
        </View>
      </View>
      <Text>Home</Text>
      {popularRecipes.map((recipe) => (
        <Resep Obj={recipe} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    verticalAlign: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn_container: {
    flex: 1,
    gap: 20,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 70,
    overflow: 'hidden',
    marginLeft: 50,
    marginTop: 20,
  },
});
