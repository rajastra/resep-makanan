import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const AccUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../img/foto.png')} style={styles.avatar} />
        <Text style={styles.premiumText}>Premium Account</Text>
      </View>
      <View style={styles.userInfo}>
    <Text style={[styles.name, {textAlign: 'center'}]}>Madazyan</Text>
    <Text style={[styles.email, {textAlign: 'center'}]}>madazyan@mail.com</Text>
    </View>
      <TouchableOpacity style={styles.profileButton}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2CFCF',
    padding: 70,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 0,
  },
  
  premiumText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f1c40f',
  },
  userInfo: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'black',
  },
  profileButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
  },
});

export default AccUser;
