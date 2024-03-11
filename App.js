import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Importa el contenedor de navegación
import { createStackNavigator } from '@react-navigation/stack'; // Importa el creador de la pila de navegación
import MainScreen from './screens/MainScreen'; // Importa la pantalla principal
import GameDetails from './screens/GameDetails'; // Importa los detalles del juego
import TabNavigator from './tabnavigator/TabNavigator'; // Importa el navegador de pestañas

const Stack = createStackNavigator(); // Crea una pila de navegación

// Crea una pantalla de pila principal
const MainStackScreen = () => (
  <Stack.Navigator>
    {/* Pantalla principal */}
    <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
    {/* Navegador de pestañas */}
    <Stack.Screen name="tabs"component={TabNavigator} options={{headerShown: false}}/>
    {/* Detalles del juego */}
    <Stack.Screen name="GameDetails" component={GameDetails} options={{headerShown: false}} />
  </Stack.Navigator>
);

// Componente principal de la aplicación
export default function App() {
  return (
    <NavigationContainer> 
      <MainStackScreen />
    </NavigationContainer>
  );
}
