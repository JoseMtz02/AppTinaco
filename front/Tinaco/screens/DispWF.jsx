import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DispWF = () => {
  const handleWifiPress = () => {
    // Acción a realizar cuando se presiona el botón de WiFi
    console.log('Seleccionar WiFi');
  };

  const handleBluetoothPress = () => {
    // Acción a realizar cuando se presiona el botón de Bluetooth
    console.log('Seleccionar Bluetooth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.cardContent} onPress={handleWifiPress}>
          <Ionicons name="wifi" size={80} color="blue" />
          <Text style={styles.cardText}>Agregar Dispositivo (WiFi)</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <TouchableOpacity style={styles.cardContent} onPress={handleBluetoothPress}>
          <Ionicons name="bluetooth" size={80} color="blue" />
          <Text style={styles.cardText}>Agregar Dispositivo (Bluetooth)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  card: {
    width: '80%',
    aspectRatio: 1.5, // Relación de aspecto 2:3
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    borderColor: 'blue',
    borderBottomWidth: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default DispWF;
