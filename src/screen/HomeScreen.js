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
import { ScrollView } from 'react-native';
import Resep from '../components/Resep';
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
      id: 20,
      name: 'Cheeseburger',
      image: bg,
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
    {
      id: 2,
      name: 'Cheeseburger',
      image: bg,
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
    {
      id: 3,
      name: 'Cheeseburger',
      image: bg,
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
    {
      id: 4,
      name: 'Cheeseburger',
      image: bg,
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
    {
      id: 5,
      name: 'Cheeseburger',
      image: bg,
      time: '3 hours ago',
      retweets: 24,
      likes: 79,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btn_container}>
          <TextInput placeholderTextColor="#fff"
            style={styles.searchInput}
            placeholder ='Mau cari resep apa?'
          />
          <TouchableOpacity style={styles.searchInput}>
            <Text style={{ color: '#fff', fontWeight: 'bold', }}>+ Tambah Makanan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profile}>
          <View>
            <Image
              source={require('../../img/foto.png')}
              style={styles.profileImage}
            />
          </View>
          <Text style={styles.profileName}>Madazyan</Text>
        </View>
      </View>

      <View style={styles.rightContentCategory}>
          <Text style={styles.contentTitle}>Category</Text>
          </View>
        <View style={styles.categories}>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Tradisional</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Hari Raya</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.category}>
        <Text style={styles.categoryText}>Camilan</Text>
      </TouchableOpacity>
    </View>

      <View style={styles.content}>
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
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f8ff',
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
    marginLeft: 50,
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 70,
  },
  profileName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  searchInput: {
    margin: 6,
    marginLeft: 0.5,
    backgroundColor: '#A51B0B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontWeight: 'bold',

  },
  content: {
    flex: 1,
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
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  category: {
    backgroundColor: '#ed3101',
    borderRadius: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  categoryText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color:'white',
  },
});

export default HomeScreen;
