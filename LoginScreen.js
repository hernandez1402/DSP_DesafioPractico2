import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home');
    } catch (err) {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Correo electrónico" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Contraseña" onChangeText={setPassword} secureTextEntry style={styles.input} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="¿No tienes cuenta? Regístrate" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15 },
  error: { color: 'red', marginBottom: 10 }
});
