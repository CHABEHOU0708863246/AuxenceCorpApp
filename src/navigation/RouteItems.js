/* eslint-disable prettier/prettier */
import * as React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export const screens = {
  HomeTab: 'HomeTab',
  HomeStack: 'HomeStack',
  Home: 'Home',
  BookStack: 'BookStack',
  Book: 'Book',
  ContactStack: 'ContactStack',
  Contact: 'Contact',
  MyRewardsStack: 'MyRewardsStack',
  MyRewards: 'MyRewards',
  LocationsStack: 'LocationsStack',
  Locations: 'Locations',
}

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: 'Home',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: 'Accueil',
    showInTab: true,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: 'Accueil',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="home" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.BookStack,
    focusedRoute: screens.BookStack,
    title: 'Salle de liivre',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="bed" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.Book,
    focusedRoute: screens.BookStack,
    title: 'Salle de liivre',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="bed" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.ContactStack,
    focusedRoute: screens.ContactStack,
    title: 'Contact',
    showInTab: true,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Contact,
    focusedRoute: screens.ContactStack,
    title: 'Contact',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="phone" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: 'Recompenses',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="star" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: 'Recompenses',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="star" size={30} color={focused ? '#551E18' : '#000'} />,
  },

  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: 'Localisation',
    showInTab: false,
    showInDrawer: true,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: 'Localisation',
    showInTab: false,
    showInDrawer: false,
    icon: (focused) =>
      <Icon name="map-marker" size={30} color={focused ? '#551E18' : '#000'} />,
  },
]