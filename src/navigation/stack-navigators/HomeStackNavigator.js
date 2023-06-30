/* eslint-disable prettier/prettier */ // Désactive les règles de formatage de Prettier pour ce fichier

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Définition du composant Home
const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/IMG-20220705-WA0051.jpg')} style={styles.image} />

      <Text style={styles.text}>
        "Auxence Corp" est une entreprise dynamique et innovante dans le domaine de l'entreprenariat. Nous sommes
        passionnés par la création et le développement de nouvelles entreprises, et nous mettons tout en œuvre pour
        soutenir et encourager les esprits entreprenants.
      </Text>

      <Text style={styles.text}>
        Chez Auxence Corp, notre objectif principal est de catalyser la croissance et la réussite des entrepreneurs. Nous
        croyons fermement que chaque idée a le potentiel de devenir une entreprise prospère, et nous nous engageons à
        fournir les ressources, les connaissances et le soutien nécessaires pour transformer ces idées en réalité.
      </Text>
    </View>
  );
};

// Définition du composant HomeStackNavigator
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Accueil" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeStackNavigator;