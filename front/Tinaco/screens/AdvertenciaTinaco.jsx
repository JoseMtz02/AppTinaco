import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AdvertenciaTinaco = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Tinaco en fuga!</Text>
      <Text style={styles.subtitle}>¡Atención! Se detectó una fuga en el tinaco.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6347', // Coral color
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // White color
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 24,
    color: '#fff', // White color
    textAlign: 'center',
  },
});

export default AdvertenciaTinaco;
