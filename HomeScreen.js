import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Principal</Text>
      <Button title="Agregar Evento" onPress={() => navigation.navigate('EventForm')} />
    </View>
  );
}
