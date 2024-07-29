import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';

const Drawer = createDrawerNavigator();
export default function RNDrawerNavigation() {
  return (
   <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name='Home' component={HomeScreen} />
            <Drawer.Screen name='About' component={AboutScreen} />
            <Drawer.Screen name='Details' component={DetailsPage} />
          </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})