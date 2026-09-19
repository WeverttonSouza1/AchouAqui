import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import HomeScreen from './src/screens/Home';
import CreatePostScreen from './src/screens/CreatePost';
import ItemDetailsScreen from './src/screens/ItemDetails';
import ProfileScreen from './src/screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
        <Stack.Screen name = "Login" component = {LoginScreen} options = {{ title: 'Login' }} />
        <Stack.Screen name = "Cadastro" component = {RegisterScreen} options = {{ headerShown: false }} />
        <Stack.Screen name = "Home" component = {HomeScreen} options = {{ title: 'Achados e Perdidos' }} />
        <Stack.Screen name = "CreatePost" component = {CreatePostScreen} options = {{ title: 'Postar' }} />
        <Stack.Screen name = "ItemDetails" component = {ItemDetailsScreen} options = {{ title: 'Detalhes do Item' }} />
        <Stack.Screen name = "Profile" component = {ProfileScreen} options = {{ title: 'Meu Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}