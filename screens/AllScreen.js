import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getAllJuegos } from '../service/ApiJuegos';



const AllScreen = () => {
  return (
    <View style={styles.container}>
      <Text>All Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AllScreen;