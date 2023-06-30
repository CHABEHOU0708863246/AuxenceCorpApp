/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Contact = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Contactez-nous</Text>
    <Text style={styles.text}>Téléphone: +225 07 08 86 32 46</Text>
    <Text style={styles.text}>Email: auxence.chabehou@gmail.com</Text>
  </View>
);

const ContactStackNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Contact" component={Contact} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ContactStackNavigator;
