import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

// Componente funcional GameCard que recibe un objeto "item" como prop
export default function GameCard({ item }) {
  return (
    // Vista contenedora con estilo "row" que contiene la imagen y el texto
    <View style={styles.row}>
      {/* Imagen del juego */}
      <Image source={{ uri: item.thumbnail }} style={styles.image} resizeMode="stretch" />
      {/* Vista de columna con texto centrado */}
      <View style={[styles.column]}>
        {/* Texto con el título del juego */}
        <Text style={[styles.text]}>{item.title}</Text>
      </View>
    </View>
  );
}

// Estilos para el componente GameCard
const styles = StyleSheet.create({
  // Estilo para la imagen del juego
  image: {
    width: 150,
    height: 150,
  },
  // Estilo para la vista contenedora con disposición en fila
  row: {
    backgroundColor: '#85DCFA', // Color de fondo
    flex: 1,
    flexDirection: "row",
    margin: 10, // Margen exterior
    borderRadius: 10, // Bordes redondeados
    overflow: 'hidden', // Oculta cualquier contenido que se desborde
  },
  // Estilo para la vista de columna con disposición en columna y centrado
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  // Estilo para el texto con tamaño de fuente, negrita y color específicos
  text: {
    fontSize: 18,
    alignItems: "center",
    fontWeight: "bold",
    color: '#063E3D', // Color del texto
  },
});
