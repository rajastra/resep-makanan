import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Resep(props) {
  const { obj } = props;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DetailScreen', { id: obj.id });
  };

  return (
    <TouchableOpacity style={styles.cardResep} onPress={handlePress}>
      <ImageBackground
        source={obj.image}
        style={styles.image}
        imageStyle={{ borderRadius: 15, resizeMode: 'cover' }}
      >
        <Text style={styles.title}>{obj.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardResep: {
    height: 150,
    marginBottom: 15,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 10,
  },
});
