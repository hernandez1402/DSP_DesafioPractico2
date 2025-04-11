import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './agenda/screens/LoginScreen';
import RegisterScreen from './agenda/screens/RegisterScreen';
import HomeScreen from './agenda/screens/HomeScreen';
import EventFormScreen from './agenda/screens/EventFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EventForm" component={EventFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
