import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { getJuegosByRelease } from '../service/ApiJuegos';
import GameCard from '../components/GameCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LatestScreen = () => {
  // Estado para almacenar la lista de juegos
  const [juegos, setJuegos] = useState([]);
  // Estado para almacenar el valor de búsqueda
  const [searchValue, setSearchValue] = useState('');
  // Objeto de navegación para la navegación entre pantallas
  const navigation = useNavigation();

  // Efecto para cargar los juegos más recientes al inicio
  useEffect(() => {
    fetchJuegos();
  }, []);

  // Función para obtener la lista de juegos más recientes desde la API
  const fetchJuegos = async () => {
    try {
      const juegosData = await getJuegosByRelease();
      console.log('Datos de juegos obtenidos:', juegosData); // Imprime los datos obtenidos en la consola
      if (juegosData && juegosData.length > 0) {
        setJuegos(juegosData);
      } else {
        console.log('Datos de juegos obtenidos: vacío');
      }
    } catch (error) {
      console.error('Error al obtener juegos:', error);
    }
  };

  // Función para manejar el cambio en el valor de búsqueda
  const handleSearch = (text) => {
    setSearchValue(text);
  };

  // Filtra los juegos según el valor de búsqueda
  const filteredJuegos = juegos.filter((juego) =>
    juego.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Buscador */}
      <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="search-web" size={24} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="Buscar juego"
          value={searchValue}
          onChangeText={handleSearch}
        />
      </View>
      {/* Lista plana de juegos */}
      <FlatList
        style={{ backgroundColor: '#BEEBFA' }}
        data={filteredJuegos}
        // Renderiza cada elemento de la lista como un componente táctil
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('GameDetails', { item: item })}>
            <GameCard item={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()} // Clave única para cada elemento de la lista
      />
    </SafeAreaView>
  );
};

// Estilos para el componente LatestScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BEEBFA',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    margin: 10,
    borderRadius: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
});

export default LatestScreen; // Exporta el componente LatestScreen
