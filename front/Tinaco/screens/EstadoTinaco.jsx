import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Switch, Animated, Easing } from 'react-native';

const EstadoTinaco = () => {
  const [fillAnimation] = useState(new Animated.Value(0));
  const [switchValue, setSwitchValue] = useState(false);

  useEffect(() => {
    Animated.timing(
      fillAnimation,
      {
        toValue: switchValue ? 1 : 0,
        duration: 5000, // Duración en milisegundos
        easing: Easing.linear,
        useNativeDriver: false, // Necesario para usar Animated en Android
      }
    ).start();
  }, [switchValue]);

  const interpolatedValue = fillAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  const toggleSwitch = () => {
    setSwitchValue(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simulación de Tinaco</Text>
      <View style={styles.tankContainer}>
        <View style={styles.waterLevel}>
          <Animated.View style={[styles.water, { height: interpolatedValue }]} />
        </View>
        <View style={styles.tank} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Bomba de Agua</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={switchValue ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={switchValue}
        />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tankContainer: {
    width: 150,
    height: 300,
    backgroundColor: '#d3d3d3',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  tank: {
    width: 120,
    height: 250,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  waterLevel: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
  },
  water: {
    width: '100%',
    backgroundColor: 'blue',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 18,
    marginRight: 10,
  },
});

export default EstadoTinaco;
