import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/MainScreen';
import HomeScreen from './screens/HomeScreen';
import AllScreen from './screens/AllScreen';
import LatestScreen from './screens/LatestScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const HomeTabsScreen = () => (
  <Tab.Navigator>
    <Tab.Screen name="LatestScreen" component={LatestScreen} /> {/* Agrega LatestScreen aquí */}
    <Tab.Screen name="All" component={AllScreen} />
  </Tab.Navigator>
);

const HomeContent = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <MainStackScreen />
    </NavigationContainer>
  );
}