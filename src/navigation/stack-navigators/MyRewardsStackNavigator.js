/* eslint-disable prettier/prettier */ // Désactive les règles de formatage de Prettier pour ce fichier

// Importation de la bibliothèque React
import React from 'react'; 

// Importation des composants View et Text de React Native
import {View, Text} from 'react-native'; 

// Importation de la fonction createStackNavigator depuis la bibliothèque @react-navigation/stack
import {createStackNavigator} from '@react-navigation/stack'; 

// Création d'une instance de Stack Navigator
const Stack = createStackNavigator(); 

// Définition du composant MyRewards
const MyRewards = () => { 
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Ecran de mes récompenses</Text> 
    </View>
  );
};

// Définition du composant MyRewardsStackNavigator
const MyRewardsStackNavigator = () => { 
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}> 
          <Stack.Screen name="Mes récompenses" component={MyRewards} /> 
        </Stack.Navigator>
    );
}

// Exportation du composant MyRewardsStackNavigator
export default MyRewardsStackNavigator; 
