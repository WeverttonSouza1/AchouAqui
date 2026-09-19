import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style = {styles.root}>
      <View style = {styles.container}>
        <Text style = {styles.title}>AchouAqui</Text>
        {/* imagem */}
        <Text style = {styles.subtitle}>Tela de Login</Text>
      </View>

      <View style = {styles.container}>
        <TextInput style = {styles.input} placeholder = "Digite o Email" value = {email} onChangeText = {setEmail} />

        <TextInput style = {styles.input} placeholder = "Digite a senha" value = {password} onChangeText = {setPassword} />

        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Home')}>
          <Text style = {styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.buttonRememberPassword]} onPress = {() => navigation.navigate('Home')}>
          <Text style = {styles.buttonTextRememberPassword}>Perdeu a senha?</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.container}>
        <View style = {styles.separator}>
          <View style = {styles.separatorLine} />
          <Text style = {styles.separatorText}>ou entre com</Text>
          <View style = {styles.separatorLine} />
        </View>
      </View>

      <View style = {styles.containerRow}>
        <TouchableOpacity style = {styles.buttonExternalLogin}>
          <FontAwesome name = "facebook" size = {24} color = "#4c288f" />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonExternalLogin}>
          <FontAwesome name = "google" size = {24} color = "#4c288f" />
        </TouchableOpacity>
      </View>

      <View style = {styles.registerRow}>
      <Text style = {styles.registerText}>Ainda não tem uma conta? </Text>
      <TouchableOpacity onPress = {() => navigation.navigate('Cadastro')}>
        <Text style = {styles.registerLink}>Cadastre-se.</Text>
      </TouchableOpacity>
      </View>
      
      <TouchableOpacity style = {[styles.button, styles.backButton]} onPress = {() => navigation.navigate('Home')}>
        <Text style = {styles.buttonText}>Voltar para home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  container: {
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
  },

  containerRow: {
    flexDirection: 'row',
    marginTop: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4c288f',
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
  },

  input: {
    backgroundColor: '#fafafa',
    borderColor: '#f0f0f0',
    borderRadius: 12,
    borderWidth: 1,
    color: '#222',
    height: 56,
    paddingHorizontal: 12,
    width: '92%',
    marginBottom: 10,
  },
  
  button: {
    backgroundColor: '#4c288f',
    padding: 12,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  buttonRememberPassword: {
    alignSelf: 'flex-end',
    marginRight: '4%',
    marginTop: 10,
  },

  buttonTextRememberPassword: {
    color: '#ffa200',
    fontSize: 17,
    fontWeight: '900',
  },

  registerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
    width: '100%',
  },

  registerText: {
    color: '#222',
    fontSize: 15,
  },

  registerLink: {
    color: '#ffa200',
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },

  backButton: {
    backgroundColor: '#6c757d',
    marginTop: 20,
  },

  buttonExternalLogin: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#6534b4',
    borderRadius: 14,
    borderWidth: 1,
    height: 58,
    justifyContent: 'center',
    marginHorizontal: 8,
    width: 92,
  },

  separator: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },

  separatorLine: {
    backgroundColor: '#e0e0e0',
    height: 2,
    flex: 1,
  },

  separatorText: {
    color: '#555',
    marginHorizontal: 12,
  },
});