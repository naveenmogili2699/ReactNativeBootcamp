import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const TopTab = createMaterialTopTabNavigator()

export default function RNTopMenuNavigation() {
  return (
     <NavigationContainer>
            <TopTab.Navigator>
              <TopTab.Screen name = 'Home' component={HomeScreen} />
              <TopTab.Screen name = 'About' component={AboutScreen} />
              <TopTab.Screen name = 'Details' component={DetailsPage} />
            </TopTab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})