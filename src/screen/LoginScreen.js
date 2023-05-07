import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // menghapus parameter kosong di dalam useNavigation

  const handleLogin = () => {
    console.log(`username: ${username}, password: ${password}`);
    // kode untuk validasi login bisa ditambahkan di sini
  
    // contoh kode untuk menampilkan pesan selamat datang jika login berhasil
    if (username === 'q' && password === '1') {
      alert(`Welcome ${username}!`); // menampilkan pesan selamat datang
      navigation.navigate('HomeScreen'); // mengarahkan ke halaman HomeScreen
    }
  }
  

  return (
    <ImageBackground source={require('../../img/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require('../../img/logo-cook.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Do you have an account?</Text>
          <TouchableOpacity onPress={() => {
            navigation.navigate('RegisterScreen'); // navigasi ke halaman RegisterScreen
          }} >
            <Text style={styles.signupButton}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10
  },
  button: {
    width: '50%',
    backgroundColor: '#DF0606',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  logo: {
    width: 230,
    height: 230,
    borderRadius: 200,
    marginBottom: 100,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  signupText: {
    color: '#fff',
    fontSize: 16
  },
  signupButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  }
});


export default LoginScreen;
