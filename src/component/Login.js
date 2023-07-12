import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';


const Login = () => {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleLogin = () => {
    //Logika untuk proses login
    //Misalnya, melakukan validasi dan mengirim permintaan ke server
    console.log('Username:', username);
    console.log('Password', password);
  };

  return (

    <View style={styles.container}>
      <Image source={require("../../assets/MieAyam.jpeg")} 
       style={{width: 150, height: 150, marginTop: 30, borderRadius: 100}} />
      <Text style={{textAlign: "center", fontWeight: "bold", fontSize: 30, color: "white"}}>BAKMIE JOKO</Text>
      <TextInput 
       style={styles.input}
       placeholder='Username'
       onChangeText={(text) => setUsername(text)}
       value={username}
      />
      <TextInput
       style={styles.inputp}
       placeholder='Password'
       onChangeText={(text) => setPassword(text)}
       value={password}
       secureTextEntry
      />
      <TouchableOpacity 
      style={styles.button}
      onPress={handleLogin}
      >
      <Text style={styles.buttonText}> Masuk </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#EE8C33'
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#EE8D33',
    backgroundColor: "white",
    borderRadius: 33,
    marginBottom: 10,
    marginTop: 50,
    paddingHorizontal: 10,
  },
  inputp: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#EE8D33',
    backgroundColor: "white",
    borderRadius: 33,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#76470E',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 33,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 33,
  },
});

export default Login