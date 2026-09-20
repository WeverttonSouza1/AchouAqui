import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ItemDetailsScreen({ navigation }: any) {
  const [item, setItem] = useState('');
  const [list, setList] = useState<string[]>([]);

  const saveItem = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem('');
    }
  };

  return (
    <KeyboardAvoidingView style = {styles.keyboardAvoidingView} behavior = {Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset = {80}>
      <ScrollView contentContainerStyle = {styles.root} keyboardShouldPersistTaps = "handled" keyboardDismissMode = "on-drag">
      <View style = {styles.elliot}>
        <Text style = {styles.greeting}>Hello, Friend!</Text>
      </View>

      <View style = {styles.container}>
        <Text style = {styles.title}>AchouAqui</Text>
        <Text style = {styles.subtitle}>Aplicativo de Achados e Perdidos</Text>
      </View>
      
      <View style = {styles.container}>
        <TextInput style = {styles.input} placeholder = "O que você encontrou/perdeu?" value = {item} onChangeText = {setItem} />
        <Text style = {styles.subtitle}>Digitando: {item}</Text>

        <TouchableOpacity style = {styles.button} onPress = {saveItem}>
          <Text style = {styles.buttonText}>Salvar Objeto</Text>
        </TouchableOpacity>
      </View>

      <View style = {styles.listContainer}>
        <Text style = {styles.subtitle}>Itens salvos:</Text>
        {list.map((object, index) => (
          <View key = {index} style = {styles.listItem}>
            <Text>{object}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style = {[styles.button, styles.backButton]} onPress = {() => navigation.goBack()}>
        <Text style = {styles.buttonText}>Voltar para Login</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    paddingBottom: 24,
  },

  elliot: {
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 15,
    borderRadius: 10,
  },

  container: {
    alignItems: 'center',
    marginTop: 12,
    width: '100%',
  },

  greeting: {
    fontSize: 20,
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
    height: 45,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8,
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

  backButton: {
    backgroundColor: '#6c757d',
    marginTop: 20,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  listContainer: {
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },

  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },

  containerRow: {
    flexDirection: 'row',
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
    color: '#555',
    marginHorizontal: 12,
  },
});
