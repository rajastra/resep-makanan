import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button title='login' onPress={() => navigation.navigate('home')} />
      <Button
        title='register'
        onPress={() => navigation.navigate('register')}
      />
    </View>
  );
}

// create styles
// Path: src\screen\LoginScreen.js

export const styles = StyleSheet.create({
  button: {
    color: 'white',
  },
});
