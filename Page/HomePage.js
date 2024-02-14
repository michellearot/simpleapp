import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviewer App</Text>
      <Button
        title="Open Reviewer"
        onPress={() => navigation.navigate('NewPage')}
        color="#B99470"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F0E5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  button: {
    height: 50,
    width: '100%',
  },
});

export default HomePage;
