import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import FakeButton from '../components/FakeButton';

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      {/* Carrusel de imágenes */}
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide}>
          <Image source={require('../assets/logo.png')} style={styles.image} />
        </View>
      </Swiper>

      {/* Botón FakeButton */}
      <FakeButton onPress={() => navigation.navigate('OtraPantalla')} title="Ir a otra pantalla" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#129494',
    },
    logo: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    wrapper: {
      height: 200,
      marginBottom: 20,
    },
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
    }
  });
export default MainScreen;