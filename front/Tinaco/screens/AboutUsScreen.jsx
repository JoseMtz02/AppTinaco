import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Nosotros</Text>
      <Text style={styles.description}>
        Somos una empresa dedicada a proporcionar soluciones innovadoras en el campo de la tecnología para mejorar la vida de las personas.
      </Text>
      <Text style={styles.description}>
        Nuestra misión es ofrecer productos y servicios de alta calidad que satisfagan las necesidades y expectativas de nuestros clientes.
      </Text>
      <Text style={styles.description}>
        Para más información, contáctenos en info@empresa.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default AboutUsScreen;
