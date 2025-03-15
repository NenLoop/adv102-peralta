import React, { useState } from 'react'
import { Text, TextInput, TouchableHighlight, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from "expo-image-picker"
import { useFonts } from "expo-font"
import {Asset} from "expo-asset"

export default function SignUp() {
    const [loaded, error] = useFonts({
      'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlePress= () => {
      if( image == defaultImg && name == '' && email == '' && password == ''){
        console.log("empty");
      }
    }
    const defaultImg = Asset.fromModule(require('../../assets/images/profile-icon.png')).uri
    const [image, setImage] = useState(defaultImg);
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,

      });

      console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    }
    const removeImage = () => {
        setImage(defaultImg); 
    }
    return (
      <View style={styles.container}>
    
        <Text style={styles.texts}>
          Register a new account
        </Text>
       
        <Image source={{ uri: image}} style={styles.images} />
        {image == defaultImg ? <TouchableOpacity onPress={pickImage}><Text style={styles.picker}>Select Profile</Text></TouchableOpacity> : 
        <TouchableOpacity onPress={removeImage}><Text style={styles.picker}>Remove Image</Text></TouchableOpacity>}
        <TextInput style={styles.input}
        onChangeText={setName}
        placeholder='Enter Name'
        value={name}
        />
        <TextInput style={styles.input}
        onChangeText={setEmail}
        placeholder='Enter Email Address'
        value={email}
        />

        <TextInput style={styles.input}
        secureTextEntry="true"
        onChangeText={setPassword}
        placeholder='Enter Password'
        value={password}

        />
        
        <TouchableHighlight onPress={handlePress}> 
        <Text style={styles.button}>SignUp</Text>

        </TouchableHighlight>

        <Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', marginTop: 25}}>
          Already have an account? 
          <Text style={{color: '#97824D'}} onPress={() => {navigation.navigate("./login")}}>Login</Text>
          
        </Text>
      </View>
    )

}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  alignContent: "space-around",
  },

  texts: {
    fontSize: 26,
    fontFamily: 'Roboto-Regular',
    fontWeight: 700,
    marginTop: -150,
    marginBottom: 35,
  },
  input: {
    height: 40,
    color: 'gray',
    paddingLeft: 10,
    marginBottom: 15,
    paddingRight: 80,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
   
  },
  button: {
    color: 'white',
    backgroundColor: '#333333',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: "110px",
    paddingRight: '110px',
    marginTop: 15,
  },
  images: {
    width: 125,
    height: 125,
    borderRadius: '100%',
  },
  picker: {
    marginBottom: 15,
    color: '#333333',
    backgroundColor: '#white',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: "50px",
    paddingRight: '50px',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  }
})
