import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AllScreen from './AllScreen';
import LatestScreen from './LatestScreen'; // Asegúrate de tener importado LatestScreen

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'AllScreen') {
          iconName = 'home';
        } else if (route.name === 'Latest') {
          iconName = 'clock';
        }

        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green', // Mueve tabBarActiveTintColor aquí
      tabBarStyle: {
        display: 'flex',
      },
    })}
  >
    <Tab.Screen name="AllScreen" component={AllScreen} />
    <Tab.Screen name="Latest" component={LatestScreen} /> {/* Utiliza el componente Screen para LatestScreen */}
  </Tab.Navigator>
);

export default HomeScreen;