import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function RegisterScreen({ navigation }: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <ScrollView style = {styles.root} contentContainerStyle = {styles.content}>
      <View style = {styles.profileSummary}>
        <View style = {styles.avatar}>
          <FontAwesome name = "user" size = {60} color = "#aeb2b8" />
        </View>
        <Text style = {styles.guestName}>Adicione uma foto de perfil (opcional)</Text>
      </View>

      <View style = {[styles.container, styles.containerRegister]}>
        <View style = {styles.containerRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "user" size = {30} color = "#aeb2b8" />
          </View>
          <View style = {styles.fieldColumn}>
            <Text style = {styles.label}>Primeiro nome:</Text>
            <TextInput style = {styles.input} placeholder = "Digite seu primeiro nome" value = {firstName} onChangeText = {setFirstName} />
          </View>
        </View>

        <View style = {styles.containerRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "user" size = {30} color = "#aeb2b8" />
          </View>
          <View style = {styles.fieldColumn}>
            <Text style = {styles.label}>Último nome:</Text>
            <TextInput style = {styles.input} placeholder = "Digite seu último nome" value = {lastName} onChangeText = {setLastName} />
          </View>
        </View>

        <View style = {styles.containerRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "envelope" size = {30} color = "#aeb2b8" />
          </View>
          <View style = {styles.fieldColumn}>
            <Text style = {styles.label}>E-mail:</Text>
            <TextInput style = {styles.input} placeholder = "seu@email.com" value = {email} onChangeText = {setEmail} />
          </View>
        </View>

        <View style = {styles.containerRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "phone" size = {30} color = "#aeb2b8" />
          </View>
          <View style = {styles.fieldColumn}>
            <Text style = {styles.label}>Telefone:</Text>
            <View style = {styles.phoneInputContainer}>
              <View style = {styles.phoneCountryContainer}>
                <Text style = {styles.phoneCountry}>🇧🇷</Text>
                <Text style = {styles.phoneCode}>+55</Text>
              </View>
              <TextInput
                style = {styles.phoneTextInput} placeholder = "(00) 00000-0000" keyboardType = "phone-pad" value = {phone} onChangeText = {(value) => setPhone(formatPhone(value))}
              />
            </View>
          </View>
        </View>

        <Text style = {styles.securityTitle}>SEGURANÇA</Text>

        <View style = {styles.containerRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "lock" size = {30} color = "#aeb2b8" />
          </View>
          <View style = {styles.fieldColumn}>
            <Text style = {styles.label}>Senha:</Text>
            <TextInput style = {styles.input} placeholder = "Crie a sua senha" value = {password} onChangeText = {setPassword} />
          </View>
        </View>

        <View style = {styles.containerRow}>
          <View style = {styles.avatarRegisterDiv}>
            <FontAwesome name = "save" size = {30} color = "#aeb2b8" />
          </View>
          <View style = {styles.fieldColumn}>
            <Text style = {styles.label}>Confirmar senha:</Text>
            <TextInput style = {styles.input} placeholder = "Repita sua senha"value = {passwordConfirmation} onChangeText = {setPasswordConfirmation} secureTextEntry/>
          </View>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Home')}>
          <Text style = {styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.container}>
        <View style = {styles.separator}>
          <View style = {styles.separatorLine} />
          <Text style = {styles.separatorText}>ou entre com</Text>
          <View style = {styles.separatorLine} />
        </View>
      </View>

      <View style = {styles.socialRow}>
        <TouchableOpacity style = {styles.buttonExternalLogin}>
          <FontAwesome name = "facebook" size = {24} color = "#4c288f" />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonExternalLogin}>
          <FontAwesome name = "google" size = {24} color = "#4c288f" />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style = {[styles.button, styles.backButton]} onPress = {() => navigation.navigate('Home')}>
        <Text style = {styles.buttonText}>Voltar para home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  container: {
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
  },

  containerRegister: {
    marginTop: 30,
    alignItems: 'center',
  },

  containerRow: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderColor: '#f0f0f0',
    borderRadius: 12,
    borderWidth: 1,
    color: '#222',
    paddingHorizontal: 12,
    width: '92%',
    marginBottom: 10,
  },

  fieldColumn: {
    flex: 1,
  },

  containerRowNumber: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
    borderRadius: 12,
    paddingHorizontal: 12,
    width: '92%',
    marginBottom: 10,
    alignItems: 'center',
  },

  phoneInputContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 52,
    flex: 1,
    width: '100%',
  },

  phoneCountryContainer: {
    alignItems: 'center',
    borderRightColor: '#e0e0e0',
    borderRightWidth: 1,
    flexDirection: 'row',
    height: 34,
    justifyContent: 'center',
    marginRight: 8,
    width: 100,
  },

  phoneCountry: {
    fontSize: 24,
    marginRight: 8,
  },

  phoneCode: {
    color: '#222',
    fontSize: 17,
  },

  phoneTextInput: {
    color: '#222',
    flex: 1,
    fontSize: 17,
    paddingVertical: 0,
  },

  phoneTextContainer: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
  },

  phoneCodeText: {
    color: '#222',
    fontSize: 16,
  },

  securityTitle: {
    alignSelf: 'flex-start',
    color: '#222',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: '4%',
    marginTop: 8,
  },

  avatarRegisterDiv: {
    alignItems: 'center',
    backgroundColor: '#e1e3e6',
    borderRadius: 16,
    height: 45,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 45,
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
  
  label: {
    color: '#222',
    fontSize: 12,
    fontWeight: '300',
    paddingHorizontal: 12,
  },

  input: {
    paddingHorizontal: 12,
    width: '100%',
    fontSize: 18,
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

  socialRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    width: '100%',
  },

  profileSummary: {
    alignItems: 'center',
    marginTop: 50,
  },

  avatar: {
    alignItems: 'center',
    backgroundColor: '#e1e3e6',
    borderRadius: 86,
    height: 142,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 142,
  },

  guestName: {
    color: '#171717',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
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