import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-web';
import Resep from './_components/Resep';
import bg from '../../img/bg.jpg';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('admin');

  const popularRecipes = [
    {
      id: 1,
      name: 'Spaghetti Carbonara',
      image: bg,
      time: '2 hours ago',
      retweets: 12,
      likes: 53,
    },
    {
      id: 2,
      name: 'Cheeseburger',
      image: bg,
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
  ];

  console.log(popularRecipes);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btn_container}>
          <TextInput style={styles.searchInput} placeholder='Search' />
          <TextInput style={styles.searchInput} placeholder='Search' />
        </View>
        <View style={styles.profile}>
          <Image
            source={require('../../img/foto.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{'Irsan'}</Text>
        </View>
      </View>
      <View style={styles.content}>
        {/* <View style={styles.leftContent}>
          <TouchableOpacity style={styles.addRecipeButton}>
            <Text style={styles.addRecipeButtonText}>Add Recipes</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.rightContent}>
          <Text style={styles.contentTitle}>Popular Recipes</Text>
          <ScrollView>
            {/* <FlatList
              data={popularRecipes}
              renderItem={({ item }) => <Resep obj={item} />}
              keyExtractor={(item) => item.id}
            /> */}
            {popularRecipes.map((recipe) => (
              <Resep obj={recipe} key={recipe.id} />
            ))}
          </ScrollView>
          {/* {popularRecipes.map((recipe) => (
            <View key={recipe.id} style={styles.recipe}>
              <Image source={recipe.image} style={styles.recipeImage} />
              <View style={styles.recipeInfo}>
                <Text style={styles.recipeName}>{recipe.name}</Text>
                <View style={styles.recipeIcons}>
                  <Text style={styles.iconText}>{recipe.time}</Text>
                  <Image
                    source={require("../../img/retweet1.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>{recipe.retweets}</Text>
                  <Image
                    source={require("../../img/like1.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.iconText}>{recipe.likes}</Text>
                </View>
              </View>
            </View>
          ))} */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  btn_container: {
    flex: 1,
    marginTop: 40,
  },
  profile: {
    width: 70,
    height: 70,
    borderRadius: 70,
    overflow: 'hidden',
    marginLeft: 50,
    marginTop: 20,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchInput: {
    flex: 2,
    margin: 6,
    marginLeft: 0.5,
    backgroundColor: '#A51B0B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconText: {
    marginLeft: 5,
    color: 'gray',
    fontSize: 14,
  },
});

export default HomeScreen;
