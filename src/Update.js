import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState}from 'react'
import firestore from '@react-native-firebase/firestore';
const UpdateScreen = (props,{navigation, route}) => {

    // const getDetails =(type) =>{
    //     if(route.params){
    //       console.log(route.params)
    //       switch(type){
    //         case "username":
    //           return route.params.name
    //         case "email":
    //           return route.params.email  
    //       }
    //     }
    //     return
    //   }
    
    const [username, setUsername] = useState('username')
    const [email, setEmail] = useState('email')
    const [userId, setUserId] = useState('')
    const {item} = props.route.params;
    const deleteUser = () => {
  if(item.id){
      firestore()
          .collection('users')
          .doc(item.id)
          .delete()
          .then(() => {
              Alert.alert(
                  'Success',
                  'Deleted Successfully',
                  props.navigation.navigate('AddItem')
              );
          })
        
          .catch((error) => {
              console.log(error)
          });
        }


  };
    const updateUser = async() => {
      if(item.id){
       try {
       await  firestore()
        .collection('users')
        .doc(item.id)
        .update({
          username: username,
          email: email
        })
        .then(() => {
            props.navigation.navigate('AddItem')
            console.log('Updated')
        })
       }
        catch(e){
          console.log(e)
        }
      }
    }
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Update</Text>
    <TextInput
      //value={item.username} 
      defaultValue={item.username}  
      onChangeText={txt => { setUsername(txt) }}
      placeholder='username' style={styles.input} />
    <TextInput
      //value={item.email}
      defaultValue={item.email}
      onChangeText={txt => { setEmail(txt) }}
      placeholder='email' style={styles.input} />
    <TouchableOpacity
      style={styles.buttonSubmit}
      onPress={() => {updateUser()}}
    >
      <Text style={{ color: '#fff' }}>Update</Text>
    </TouchableOpacity>   
    <TouchableOpacity
      style={styles.buttonSubmit}
      onPress={() => {deleteUser()}}
    >
      <Text style={{ color: '#fff' }}>delete</Text>
    </TouchableOpacity>  
    </View>
  )
}

export default UpdateScreen

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