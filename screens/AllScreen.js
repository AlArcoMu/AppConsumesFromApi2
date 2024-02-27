import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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