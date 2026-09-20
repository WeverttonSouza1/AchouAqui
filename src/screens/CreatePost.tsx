import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) return digits.length ? `(${digits}` : '';
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export default function CreatePostScreen({ navigation }: any) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [reward, setReward] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('achado'); // 'achado' ou 'perdido'

  return (
    <KeyboardAvoidingView style = {styles.keyboardAvoidingView} behavior = {Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset = {80}>
      <ScrollView contentContainerStyle = {styles.root} keyboardShouldPersistTaps = "handled" keyboardDismissMode = "on-drag">
        <View style = {styles.header}>
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

        <View style = {styles.photoSection}>
          <Text style = {styles.sectionTitle}>Fotos</Text>
          <View style = {styles.subPhotoContainer}>
            <View style = {styles.photoContainer}>
              <TouchableOpacity style = {styles.photoButton}>
                <View style = {styles.photoPlaceholder}>
                  <View style = {styles.photoSimbol}>
                    <FontAwesome name = "camera" size = {40} color = "#aaa" />
                  </View>
                  <Text style = {styles.photoText}>Foto 1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.photoButton}>
                <View style = {styles.photoPlaceholder}>
                  <View style = {styles.photoSimbol}>
                    <FontAwesome name = "camera" size = {40} color = "#aaa" />
                  </View>
                  <Text style = {styles.photoText}>Foto 2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style = {styles.photoButton}>
                <View style = {styles.photoPlaceholder}>
                  <View style = {styles.photoSimbol}>
                    <FontAwesome name = "camera" size = {40} color = "#aaa" />
                  </View>
                  <Text style = {styles.photoText}>Foto 3</Text>
                </View>
              </TouchableOpacity>
            </View>
            <Text style = {styles.photoHint}>Clique para adicionar uma foto</Text>
          </View>
        </View>
        
        <View style = {styles.container}>
          <Text style = {styles.sectionTitle}>Detalhes</Text>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "edit" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Título</Text>
              <TextInput style = {styles.detailInput} placeholder = "O que é? (Ex: Chave do carro)" value = {title} onChangeText = {setTitle} />
            </View>
          </View>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "phone" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Contato</Text>
              <View style = {styles.phoneInputContainer}>
                <View style = {styles.phoneCountryContainer}>
                  <Text style = {styles.phoneCountry}>🇧🇷</Text>
                  <Text style = {styles.phoneCode}>+55</Text>
                </View>
                <TextInput
                  style = {styles.phoneTextInput} placeholder = "(00) 00000-0000" keyboardType = "phone-pad" value = {contact} onChangeText = {(value) => setContact(formatPhone(value))}
                />
              </View>
            </View>
          </View>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "envelope" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Email para contato</Text>
              <TextInput style = {styles.detailInput} placeholder = "Digite o Email" value = {email} onChangeText = {setEmail} />
            </View>
          </View>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "money" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Recompensa</Text>
              <TextInput style = {styles.detailInput} placeholder = "Valor opcional" value = {reward} onChangeText = {setReward} keyboardType = "numeric" />
            </View>
          </View>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "tag" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Categoria</Text>
              <TextInput style = {styles.detailInput} placeholder = "Escolha uma categoria" value = {category} onChangeText = {setCategory} />
            </View>
            <FontAwesome name = "chevron-right" size = {16} color = "#999" />
          </View>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "calendar" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Data</Text>
              <TextInput style = {styles.detailInput} placeholder = "Selecione uma data" value = {date} onChangeText = {setDate} />
            </View>
            <FontAwesome name = "chevron-right" size = {16} color = "#999" />
          </View>

          <View style = {styles.detailRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "map-marker" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Localização</Text>
              <TextInput style = {styles.detailInput} placeholder = "Onde foi? (Ex: Bloco B)" value = {location} onChangeText = {setLocation} />
            </View>
            <FontAwesome name = "chevron-right" size = {16} color = "#999" />
          </View>

          <View style = {styles.descriptionRow}>
            <View style = {styles.detailIcon}>
              <FontAwesome name = "file-text-o" size = {30} color = "#4c288f" />
            </View>
            <View style = {styles.fieldColumn}>
              <Text style = {styles.label}>Descrição</Text>
              <TextInput style = {styles.descriptionInput} placeholder = "Detalhes adicionais (cor, marca...)" value = {description} onChangeText = {setDescription} multiline numberOfLines = {4} />
            </View>
          </View>

          <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate('Home')}>
            <FontAwesome name = "save" size = {20} color = "#fff" style = {{ marginRight: 10 }} />
            <Text style = {styles.buttonText}>Publicar</Text>
          </TouchableOpacity>

          <TouchableOpacity style = {[styles.button, styles.backButton]} onPress = {() => navigation.goBack()}>
            <Text style = {styles.buttonText}>Cancelar</Text>
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
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
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

  subPhotoContainer: {
    alignItems: 'center',
    backgroundColor: '#fffefe',
    borderRadius: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingVertical: 12,
    width: '92%',
  },

  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffa200',
    marginBottom: 10,
    paddingLeft: 22,
  },

  photoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },

  photoSection: {
    alignItems: 'center',
    width: '100%',
  },

  photoButton: {
    alignItems: 'center',
  },

  photoPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fafafa',
  },

  photoSimbol: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  photoText: {
    color: '#ccc',
    fontSize: 16,
    marginTop: 10,
  },

  photoHint: {
    alignSelf: 'center',
    color: '#777',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },

  label: {
    color: '#222',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 2,
  },

  detailRow: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderColor: '#f0f0f0',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 12,
    width: '92%',
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

  descriptionRow: {
    alignItems: 'flex-start',
    backgroundColor: '#fafafa',
    borderColor: '#f0f0f0',
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 15,
    minHeight: 112,
    paddingHorizontal: 12,
    paddingVertical: 12,
    width: '92%',
  },

  detailIcon: {
    alignItems: 'center',
    backgroundColor: '#e1e3e6',
    borderRadius: 12,
    height: 45,
    justifyContent: 'center',
    marginRight: 12,
    width: 45,
  },

  detailInput: {
    color: '#222',
    fontSize: 17,
    height: 52,
    paddingHorizontal: 0,
    width: '100%',
  },

  descriptionInput: {
    color: '#222',
    fontSize: 17,
    minHeight: 70,
    paddingHorizontal: 0,
    textAlignVertical: 'top',
    width: '100%',
  },

  fieldColumn: {
    flex: 1,
  },

  button: {
    backgroundColor: '#d15a0f',
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