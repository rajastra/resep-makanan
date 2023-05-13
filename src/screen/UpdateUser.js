import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const UpdateUser = () => {
  const [userImage, setUserImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleImagePicker = () => {
    ImagePicker.showImagePicker({title: 'Select Image'}, response => {
      if (response.uri) {
        setUserImage(response.uri);
      }
    });
  };

  const handleChangePassword = () => {
    // Perform actions for changing password here
  };

  return (
    <View style={styles.container}>
  {userImage && (
    <TouchableOpacity onPress={handleImagePicker}>
      <Image source={{uri: userImage}} style={styles.userImage} />
    </TouchableOpacity>
  )}
  {!userImage && (
    <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
      <Text style={styles.imagePickerButtonText}>Upload Foto</Text>
    </TouchableOpacity>
  )}
  <View style={styles.centered}>
    <TextInput
      placeholder="Name"
      style={styles.textInput}
      value={userName}
      onChangeText={text => setUserName(text)}
    />
    <TextInput
      placeholder="E-mail"
      style={styles.textInput}
      value={userEmail}
      onChangeText={text => setUserEmail(text)}
    />
    <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
      <Text style={styles.changePasswordButtonText}>Ganti Password</Text>
    </TouchableOpacity>
  </View>
</View>

 );
};
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F2CFCF',
    borderRadius: 10,
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  imagePickerButton: {
    backgroundColor: '#f50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePickerButtonText: {
    fontSize: 18,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%'
  },
  changePasswordButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  changePasswordButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UpdateUser;
