/* eslint-disable prettier/prettier */
import React, { createRef } from 'react'
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {NavigationContainer} from '@react-navigation/native';

// store reference to navigation object
const navigationRef = createRef()
const nav = () => navigationRef.current


const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});

export default App;
