import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Resep from '../components/Resep';
import bg from '../../img/bg.jpg';
import useHttp from '../hooks/use-http';
import { useAuth } from '../context/auth-context';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const { user } = useAuth();
  const { isLoading, error, sendRequest } = useHttp();

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [recipes, search]);

  const getRecipes = useCallback(async () => {
    sendRequest(
      {
        url: '/api/v1/recipes',
      },
      (responseData) => {
        const data = responseData.data.data.map((recipe) => {
          return {
            id: recipe._id,
            name: recipe.title,
            image: bg,
          };
        });
        setRecipes(data);
      }
    );
  }, [sendRequest]);

  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.btn_container}>
          <TextInput
            placeholderTextColor='#fff'
            style={styles.searchInput}
            placeholder='Mau cari resep apa?'
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity
            style={styles.searchInput}
            onPress={() => navigation.navigate('AddMakanan')}
          >
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
              + Tambah Makanan
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate('AccUser')}
        >
          <View>
            <View>
              <Image
                source={require('../../img/foto.png')}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.profileName}>{user.name || 'User'}</Text>
          </View>
        </TouchableOpacity>
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
          {isLoading && <ActivityIndicator size='large' color='#DF0606' />}
          {!isLoading && (
            <ScrollView>
              {filteredRecipes?.map((recipe) => (
                <Resep obj={recipe} key={recipe.id} />
              ))}
            </ScrollView>
          )}
          {filteredRecipes.length === 0 && !isLoading && (
            <Text
              style={{
                textAlign: 'center',
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Tidak ada resep
            </Text>
          )}
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
    color: '#fff',
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
    color: 'white',
  },
});

export default HomeScreen;
