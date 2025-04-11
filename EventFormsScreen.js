import React from 'react';
import { View, Text, Button } from 'react-native';

export default function EventFormScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Formulario para agregar evento</Text>
      <Button title="Guardar" onPress={() => navigation.goBack()} />
    </View>
  );
}
