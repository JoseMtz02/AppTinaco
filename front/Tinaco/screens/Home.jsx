import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
    const handleMenuItemPress = (screenName) => {
        navigation.navigate(screenName);
      };
  const [fillAnimation] = useState(new Animated.Value(0));
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    Animated.timing(
      fillAnimation,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }
    ).start();
  }, []);
  
  {/* Contenido del componente */}
  <View style={styles.water}>
    <View style={styles.wave} />
  </View>

  const interpolatedValue = fillAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      {/* Botón del menú hamburguesa */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Ionicons name={menuVisible ? 'close' : 'menu'} size={24} color="black" />
      </TouchableOpacity>
      
      <View style={styles.container}>
  {/* Contenido de la pantalla */}
  <Text style={[styles.title, { marginTop: -60 }]}>¡Hola, Bienvenido Angel!</Text>
  <Text style={[styles.title, { marginTop: 20, marginBottom: 40 }]}>TINACO N°1</Text>
  <View style={styles.tankContainer}>
    <View style={styles.waterLevel}>
      <Animated.View style={[styles.water, { height: interpolatedValue }]} />
    </View>
    <View style={styles.tank} />
  </View>
  <Text style={[styles.title, { marginTop: 60 }]}>Actualización: RECIENTE</Text>
</View>

      {/* Menú hamburguesa */}
      {menuVisible && (
        <View style={styles.menu}>
            <TouchableOpacity onPress={() => handleMenuItemPress('EditProfileScreen')}>
          <Text style={styles.menuItem}>Mi Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('EstadoTinaco')}>
          <Text style={styles.menuItem}>Estado del Tinaco</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('DispWF')}>
          <Text style={styles.menuItem}>Ver Dispositivos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('AboutUsScreen')}>
          <Text style={styles.menuItem}>Más Información</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Login')}>
          <Text style={styles.menuItem}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9fcdea',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: '20'
  },
  tankContainer: {
    width: 150,
    height: 210,
    backgroundColor: '#d3d3d3',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tank: {
    width: 280,
    height: 180,
    backgroundColor: '#FFFFFF',
    borderColor: '#000080',
    borderBottomWidth: 95,
  },
  menuButton: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1, // Asegura que esté por encima del contenido
  },
  menu: {
    position: 'absolute',
    top: 70,
    left: 20,
    backgroundColor: '#037295',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 5,
    fontSize: 16,
    backgroundColor: '#037295',
  },
});

export default Home;
