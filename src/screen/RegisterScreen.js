import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Button title='signup' onPress={() => navigation.navigate('login')} />
      <Button
        title='sudah memiliki akun'
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
}
