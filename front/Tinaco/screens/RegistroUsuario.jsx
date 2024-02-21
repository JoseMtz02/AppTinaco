import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = () => {
    // Implementación del backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa los siguientes datos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        value={apellidos}
        onChangeText={setApellidos}
      />
    
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correoElectronico}
        onChangeText={setCorreoElectronico}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry={true}
      />
      <Button
          title="Registrarse"
          onPress={handleRegistro}
          style={styles.button}
          color="#44C7B6"
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
      fontSize: 18,
      marginBottom: 40,
      marginTop: -90,
      fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 80,
    alignItems: 'center',
  },
  input: {
    height: 55,
    width: '95%',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#D9D9D9'
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
export default RegistroUsuario;
