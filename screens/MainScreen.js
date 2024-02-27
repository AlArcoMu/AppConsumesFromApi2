import React from 'react';
import { View, Text, Image, SafeAreaView,StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import FakeButton from '../components/FakeButton';
import { useNavigation } from '@react-navigation/native';

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Swiper style={styles.wrapper} showsButtons={true} horizontal={true}>
        <View style={styles.slide}>
          <Image source={require('../assets/HaloI.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/Hearthstone.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/LOL.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/Warzone.jpeg')} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={require('../assets/OW2.jpeg')} style={styles.image} />
        </View>
      </Swiper>
      <FakeButton onPress={() => navigation.navigate('Home')} title="Ir a otra pantalla" />
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
      resizeMode: 'cover', // Ajusta el modo de redimensionamiento según sea necesario
    }
  });
export default MainScreen;