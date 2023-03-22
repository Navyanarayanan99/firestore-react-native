import { Alert, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, doc, setDoc, addDoc } from "firebase/firestore";
import { db } from './components/config';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
const CreateDB = () => {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  const submit = async() => {
    // addDoc(collection(db, "users"), {
    //   username: username,
    //   email: email
    // }).then(() => {
    //   console.log("data submitted")
    //   Alert.alert("Submitted");
    // }).catch((error) => {
    //   console.log(error);
    // });
    if (username && email) {
      await firestore()
        .collection('users')
        .add({
          username: username,
          email: email
        })
        .then(() => {
          navigation.navigate('AddItem')
        })
        .catch((error) => {
          console.log(error)
        });
      return;
    } else {
      Alert.alert('Please fill')
    }}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Firebase CRUD</Text>
      <TextInput
        value={username}
        onChangeText={(username) => { setUsername(username) }}
        placeholder='username' style={styles.input} />
      <TextInput
        value={email}
        onChangeText={(email) => { setEmail(email) }}
        placeholder='email' style={styles.input} />
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress={() => submit()}
      >
        <Text style={{ color: '#fff' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateDB

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 45,
    borderRadius: 10,
    backgroundColor: '#000',
    marginTop: 20
  },
 
})

