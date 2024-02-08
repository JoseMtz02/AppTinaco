import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Logo from '../assets/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  const handleRegister = () => {
    // Aquí puedes implementar la navegación a la pantalla de registro
    console.log('Navegar a la pantalla de registro');
  };

  return (
    <View style={styles.container}>
        <Image
        source={Logo} // Ajusta la ruta y el nombre del archivo de tu logo
        style={styles.logo}
      />
      <View style={styles.card}>
        <Text style={styles.title}>Inicio de sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          autoCapitalize="none"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Ingresar" onPress={handleLogin} />
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente el contenido
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 280,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute', // Coloca el logo en la parte superior de la pantalla
    top: 20,
  },
  card: {
    backgroundColor: '#003785',
    borderRadius: 10,
    padding: 80,
    width: '100%',
    alignItems: '', // Centra horizontalmente el card
    marginBottom: '', // Coloca el card en la mitad de la pantalla hacia abajo
    marginTop: 'auto', // Coloca el card en la mitad de la pantalla hacia arriba
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    width: '135%',
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 20,
    alignSelf: 'center'
  },
  registerText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFF',
  },
});

export default Login;
