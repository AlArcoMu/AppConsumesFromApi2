// Pantallas para mostrar detalles del juego seleccionado
import React from 'react';
import { View, Text, StyleSheet, Linking, Image, SafeAreaView } from 'react-native';

const GameDetails = ({ route }) => {
  // Obtener el juego seleccionado de las props de la ruta
  const { item } = route.params;

  // Función para abrir la URL del juego
  const abrirURL = () => {
    Linking.openURL(item.game_url)
      .catch((err) => console.error('Error al abrir la URL: ', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Título del juego en mayúsculas */}
      <Text style={styles.title}>{item.title.toUpperCase()}</Text>
      {/* Imagen del juego */}
      <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode="stretch" />

      {/* Contenedor de la descripción del juego */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>{item.short_description}</Text>
      </View>

      {/* Contenedor del enlace para encontrar el juego online */}
      <View style={styles.linkContainer}>
        <Text style={styles.textWhite}>ENCUENTRA EL JUEGO ONLINE:</Text>
        <Text style={styles.link} onPress={abrirURL}>{item.game_url}</Text>
      </View>

      {/* Contenedor de información sobre la plataforma y el editor del juego */}
      <View style={styles.infContainer}>
        <View style={styles.infContainer1}>
          <Text style={styles.textWhite}>{item.platform}</Text>
        </View>
        <View style={styles.infContainer2}>
          <Text style={styles.textWhite}>{item.publisher}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Estilos para los componentes del GameDetails
const styles = StyleSheet.create({
  // Estilos generales del contenedor
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#beebfa',
  },
  // Estilos para el texto común
  text: {
    fontSize: 17,
    fontWeight: '500',
    width: '90%',
  },
  // Estilos para el texto en color blanco
  textWhite: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    width: '90%',
    textAlign: 'center', 
  },
  // Estilos para el enlace
  link: {
    fontSize: 20,
    fontWeight: '800',
    color: 'white',
    textDecorationLine: 'underline',
  },
  // Estilos para el título del juego
  title: {
    fontSize: 40,
    fontWeight: '900',
    marginTop: 50,
    textTransform: 'uppercase',
    color: '#063e3d',
  },
  // Estilos para la imagen del juego
  image: {
    width: '90%',
    height: '25%',
    resizeMode: 'stretch',
    borderRadius: 15,
    marginTop: 15,
  },
  // Estilos para el contenedor de la descripción del juego
  descriptionContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: '#5fcfcd',
    padding: 10,
    paddingBottom: 13,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  // Estilos para el contenedor del enlace
  linkContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#5fcfcd',
    padding: 10,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  // Estilos para el contenedor de información sobre la plataforma y el editor del juego
  infContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // Estilos para el primer contenedor de información
  infContainer1: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#129494',
    padding: 15,
    marginVertical: 10,
    width: '45%',
    alignSelf: 'flex-start',
    paddingLeft: 22,
  },
  // Estilos para el segundo contenedor de información
  infContainer2: {
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#129494',
    padding: 15,
    marginVertical: 10,
    width: '45%',
    height: '80%',
    alignSelf: 'flex-end',
    paddingLeft: 22,
  },
});

export default GameDetails; // Exporta el componente de detalles del juego