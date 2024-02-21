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
      <Text style={[styles.title, { marginTop: 10, marginBottom: 60 }]}>Estado del tinaco N°1</Text>
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
         <Text style={styles.fugaText}>Fuga: NINGUNA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D0ECE7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tankContainer: {
    width: 170,
    height: 270,
    backgroundColor: '#d3d3d3',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  tank: {
    width: 280,
    height: 240,
    backgroundColor: '#FDFEFE',
    borderColor: '#037295',
    borderTopWidth: 0,
    borderBottomWidth: 225,
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
  fugaText: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10, 
    color: 'black',
  }  
});

export default EstadoTinaco;
