import React, { useState } from 'react'
import { Text, TextInput, TouchableHighlight, View, StyleSheet, Button, Image } from 'react-native'
import { useFonts } from "expo-font"

export default function Login() {
    const [loaded, error] = useFonts({
      'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf')
    })
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlePress= () => {
      if(email == '' && password == ''){
        console.log("empty");
      }
    }
    return (
      <View style={styles.container}>
    
        <Text style={styles.texts}>
          Login existing account
        </Text>
        
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
        <Text style={styles.button}>Login</Text>

        </TouchableHighlight>

        <Text style={{fontSize: 12,fontFamily: 'Roboto-Regular', marginTop: 25}}>
          Don't have an account?
          <Text style={{color: '#97824D'}}onPress={() => {navigation.navigate("./signup")}}> Sign Up</Text>
          
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
    width: 200,
    height: 200,
  }
})
