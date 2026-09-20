import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function RegisterScreen({ navigation }: any) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <KeyboardAvoidingView style = {styles.keyboardAvoidingView} behavior = {Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset = {80}>
      <ScrollView style = {styles.root} contentContainerStyle = {styles.content} keyboardShouldPersistTaps = "handled" keyboardDismissMode = "on-drag">
        <View style = {styles.avatarSection}>
          <View style = {styles.avatar}>
            <FontAwesome name = "user" size = {76} color = "#AEB2B8" />
          </View>
          <TouchableOpacity style = {styles.editAvatarButton}>
            <FontAwesome name = "pencil" size = {23} color = "#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style = {styles.container}>
          <View style = {styles.separator}>
            <View style = {styles.separatorLine} />
            <Text style = {styles.separatorText}>{firstName} {lastName}</Text>
            <View style = {styles.separatorLine} />
          </View>
        </View>

        <View style = {[styles.container, styles.containerRegister]}>
          <View style = {styles.containerRow}>
            <View style = {styles.avatarRegisterDiv}>
              <FontAwesome name = "user" size = {30} color = '#ffa200' />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Primeiro nome</Text>
              <TextInput style = {styles.input} placeholder = "Digite seu primeiro nome" value = {firstName} onChangeText = {setFirstName} />
            </View>
          </View>

          <View style = {styles.containerRow}>
            <View style = {styles.avatarRegisterDiv}>
              <FontAwesome name = "user" size = {30} color = '#ffa200' />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Último nome</Text>
              <TextInput style = {styles.input} placeholder = "Digite seu último nome" value = {lastName} onChangeText = {setLastName} />
            </View>
          </View>

          <View style = {styles.containerRow}>
            <View style = {styles.avatarRegisterDiv}>
              <FontAwesome name = "phone" size = {30} color = '#ffa200' />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Telefone</Text>
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
              <FontAwesome name = "lock" size = {30} color = '#ffa200' />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Senha</Text>
              <TextInput style = {styles.input} placeholder = "Digite sua nova senha" value = {password} onChangeText = {setPassword} secureTextEntry/>
            </View>
          </View>

          <View style = {styles.containerRow}>
            <View style = {styles.avatarRegisterDiv}>
              <FontAwesome name = "save" size = {30} color = '#ffa200' />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Confirmar senha</Text>
              <TextInput style = {styles.input} placeholder = "Repita sua senha"value = {passwordConfirmation} onChangeText = {setPasswordConfirmation} secureTextEntry/>
            </View>
          </View>

          <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Home')}>
            <Text style = {styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },

  root: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 24,
  },

  container: {
    alignItems: 'center',
    width: '100%',
  },

  containerRegister: {
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
    borderRadius: 12,
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 48,
  },

  avatarSection: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20 ,
    marginBottom: 28,
  },

  avatar: {
    alignItems: 'center',
    backgroundColor: '#E1E3E6',
    borderRadius: 92,
    height: 184,
    justifyContent: 'center',
    width: 184,
  },

  editAvatarButton: {
    alignItems: 'center',
    backgroundColor: '#4C288F',
    borderColor: '#FFFFFF',
    borderRadius: 30,
    borderWidth: 3,
    bottom: -4,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    right: -8,
    width: 60,
  },

  guestName: {
    color: '#ffa200',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
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
    color: '#141313',
    fontSize: 26,
    fontWeight: '800',
    marginHorizontal: 12,
    marginBottom: 32,
  },
});