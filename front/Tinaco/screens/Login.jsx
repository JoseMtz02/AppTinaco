import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Logo from '../assets/logo.png';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  const handleRegister = () => {
    navigation.navigate('RegistroUsuario');
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
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerText}>¿No tienes una cuenta? <Text style={{fontWeight: 'bold'}}>Regístrate aquí</Text></Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Parte de arriba
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
    backgroundColor: '#003785', // Parte de abajo
    borderTopLeftRadius: 35, // Redondear la esquina superior izquierda
    borderTopRightRadius: 35, // Redondear la esquina superior derecha
    padding: 75,
    width: '100%',
    alignItems: 'center', // Centra horizontalmente el card
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
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    width: '135%',
    height: 50,
    borderColor: '#44C7B6',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
    paddingLeft: 20,
    alignSelf: 'center'
  },
  registerText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#FFFF',
  },
  button: {
    backgroundColor: '#44C7B6',
    padding: 8,
    borderRadius: 40,
    alignItems: 'center',
    width: 150,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
  },  
});

export default Login;
