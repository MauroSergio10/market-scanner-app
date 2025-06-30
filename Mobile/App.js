import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Onda from './assets/svg/Onda.svg'; // Verifique se o caminho está correto
import { TextInputMask } from 'react-native-masked-text';
import { useState } from 'react';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const { height } = Dimensions.get('window');

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.container}>

          {/* Topo com logo e onda */}
          <View style={styles.logoContainer}>
            <Onda style={styles.onda} />
            <Image 
              source={require('./assets/Image/Logo.png')} 
              style={styles.logoImage} 
              resizeMode="contain"
            />
          </View>

          {/* Caixa de login */}
          <View style={[styles.loginBox, { marginTop: height * 0.02 }]}>
            <Text style={styles.title}>Log In</Text>

            <TextInputMask
              type={'cpf'}
              placeholder="CPF"
              keyboardType='numeric'
              onChangeText={setCpf}
              value={cpf}
              maxLength={14}
              style={styles.input}
            />

            <TextInput
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
              value={password}
              style={styles.input}
            />

            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          {/* Rodapé com criar conta */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerPrompt}>Ainda não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.registerText}>Criar conta</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    position: 'relative',
  },
  onda: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logoImage: {
    width: '90%',
    height: '90%',
  },
  loginBox: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  forgotPassword: {
    color: '#3FC954',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#3FC954',
    width: '100%',
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  registerPrompt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#3FC954',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
