import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const UpdatePass = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSavePassword = () => {
    // Save new password to database or perform other actions here
  };

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry
        placeholder="Masukkan Password Lama"
        style={styles.textInput}
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
      />
      <TextInput
        secureTextEntry
        placeholder="Masukkan Password Baru"
        style={styles.textInput}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSavePassword}>
        <Text style={styles.saveButtonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2CFCF',
      borderRadius: 10,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
      width: '100%'
    }, 
  saveButton: {
    backgroundColor: '#DF0606',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UpdatePass;
