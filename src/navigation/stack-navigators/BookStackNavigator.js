/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

const Book = () => (
    <View style = {{ flex : 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Ecran des livres</Text>
    </View>
)


const BookStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "Livre" component = {Book} />
    </Stack.Navigator>
)


export default BookStackNavigator;