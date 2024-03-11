import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllScreen from '../screens/AllScreen'; // Importa la pantalla "AllScreen"
import LatestScreen from '../screens/LatestScreen'; // Importa la pantalla "LatestScreen"
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa los iconos de MaterialCommunityIcons

const Tab = createBottomTabNavigator(); // Crea un navegador de pestañas

// Navegador de pestañas
const TabNavigator = () => (
  <Tab.Navigator 
  screenOptions={{
    tabBarActiveTintColor: 'white', // Color del texto de la pestaña activa
    tabBarLabelStyle: {
      fontSize: 16, // Tamaño de la fuente del texto de la pestaña
      fontWeight: 'bold' // Peso de la fuente del texto de la pestaña
    },
    tabBarStyle: {
      backgroundColor: '#129494', // Color de fondo de la barra de pestañas
      height:60 // Altura de la barra de pestañas
    }
  }}>
    <Tab.Screen name="All" component={AllScreen}  // Pestaña de todos los juegos
    options={{
      tabBarIcon: ({ color, size }) => ( // Icono de la pestaña
        <MaterialCommunityIcons 
            name="gamepad-variant" 
            size={size + 10} 
            color={color} 
          />
      ),
      headerShown: false // Oculta el encabezado
    }}
    />
    <Tab.Screen name="Latest" component={LatestScreen} // Pestaña de los juegos más recientes
    options={{
      tabBarIcon: ({ color, size }) => ( // Icono de la pestaña
        <MaterialCommunityIcons 
            name="history" 
            size={size + 10} 
            color={color}
          />
      ),
      headerShown: false // Oculta el encabezado
    }}
    />
  </Tab.Navigator>
);

export default TabNavigator; // Exporta el navegador de pestañas