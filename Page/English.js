import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const English = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trivia Questions</Text>
      <View style={styles.innerContainer}>
        <Text>Q: According to Greek mythology, who was the first woman on earth?
A: Pandora</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text>Q: According to Greek mythology, who was the first woman on earth?
A: Pandora.</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text>Q: Which African country was formerly known as Abyssinia?
A: Ethiopia </Text>
      </View>

      <View style={styles.innerContainer}>
        <Text>Q: In which European city would you find Orly airport?
A: Paris</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text>Q: Fissures, vents, and plugs are all associated with which geological feature?
A: Volcanos</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text>Q: Which Dutch artist painted “Girl with a Pearl Earring”?
A: Vermeer is a sentence inside a container.</Text>
      </View>

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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  innerContainer: {
    backgroundColor: '#DAC0A3',
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  
    
  },
});

export default English;
