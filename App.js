import { StyleSheet, Text, View, Image, TextInput, Button, Touchable, TouchableOpacity } from 'react-native';
import Onda from './assets/svg/Onda.svg'; // Ensure this path is correct  
import { TextInputMask } from 'react-native-masked-text';
import { useState } from 'react';


export default function App() {

const [cpf, setCpf] = useState('');
const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Onda style={{position:'absolute'}}/>
        <Image source={require('./assets/Image/Logo.png')} style={{width: '90%', height: '90%' }} />
      </View>
      <Text>Log In</Text>
      <TextInputMask
      type={'cpf'} 
      placeholder="CPF" 
      keyboardType='numeric' 
      onChangeText={setCpf} 
      value={cpf} 
      maxLenght={14} />
      <TextInput
      placeholder="Senha"
      secureTextEntry={true}
      onChangeText={setPassword}
      value={password}/>
      <TouchableOpacity>
        <Text style={{backgroundColor: '#3FC954'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
