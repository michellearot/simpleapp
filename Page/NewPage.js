import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NewPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Page</Text>

    
      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('ElecPage')}
      >
        <Text style={styles.subjectTitle}>Trivia Revieiwer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('English')}
      >
        <Text style={styles.subjectTitle}>English Reviewer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('History')}
      >
        <Text style={styles.subjectTitle}>History Reviewer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Math')}
      >
        <Text style={styles.subjectTitle}>Math Reviewer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.subjectContainer}
        onPress={() => navigation.navigate('Science')}
      >
        <Text style={styles.subjectTitle}>Science Reviewer</Text>
      </TouchableOpacity>

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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  subjectContainer: {
    backgroundColor: '#DAC0A3',
    padding: 20,
    marginVertical: 10,
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
  },
  subjectTitle: {
    fontSize: 18,
    color: '#000',
  },
});

export default NewPage;
