import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function CreatePostScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('achado'); // 'achado' ou 'perdido'

  return (
    <ScrollView contentContainerStyle = {styles.root}>
      <View style = {styles.header}>
        <Text style = {styles.title}>Registrar Objeto</Text>
        <Text style = {styles.subtitle}>Preencha os detalhes abaixo</Text>
      </View>

      <View style = {styles.typeSelector}>
        <TouchableOpacity style = {[styles.typeButton, type === 'achado' && styles.typeButtonActive]} onPress = {() => setType('achado')}>
          <Text style = {[styles.typeButtonText, type === 'achado' && styles.typeButtonTextActive]}>Eu Achei</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.typeButton, type === 'perdido' && styles.typeButtonActive]} onPress = {() => setType('perdido')}>
          <Text style = {[styles.typeButtonText, type === 'perdido' && styles.typeButtonTextActive]}>Eu Perdi</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.container}>
        <TextInput style = {styles.input} placeholder = "O que é? (Ex: Chave do carro)" value = {title} onChangeText = {setTitle} />
        <TextInput style = {styles.input} placeholder = "Onde foi? (Ex: Bloco B)" value = {location} onChangeText = {setLocation}/>
        <TextInput style = {[styles.input, styles.textArea]} placeholder = "Detalhes adicionais (cor, marca...)" value = {description} onChangeText = {setDescription} multiline = {true}numberOfLines = {4}/>

        <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Home')}>
          <FontAwesome name = "save" size = {20} color = "#fff" style = {{ marginRight: 10 }} />
          <Text style = {styles.buttonText}>Publicar</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {[styles.button, styles.backButton]} onPress = {() => navigation.goBack()}>
          <Text style = {styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 24,
  },

  header: {
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4c288f',
  },

  subtitle: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },

  container: {
    alignItems: 'center',
    width: '100%',
  },

  typeSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '92%',
    marginBottom: 20,
  },

  typeButton: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4c288f',
    borderRadius: 12,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },

  typeButtonActive: {
    backgroundColor: '#4c288f',
  },

  typeButtonText: {
    color: '#4c288f',
    fontWeight: 'bold',
    fontSize: 16,
  },

  typeButtonTextActive: {
    color: '#fff',
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
    marginBottom: 15,
  },

  textArea: {
    height: 100,
    paddingTop: 15,
    textAlignVertical: 'top',
  },
  
  button: {
    backgroundColor: '#ffa200', // Destaque em laranja para a ação principal
    padding: 12,
    borderRadius: 25,
    width: '92%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    height: 56,
  },

  backButton: {
    backgroundColor: '#6c757d',
    marginTop: 15,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});