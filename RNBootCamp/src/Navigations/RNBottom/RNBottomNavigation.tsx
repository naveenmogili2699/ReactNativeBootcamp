import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';
import RNFirebase from '../../Screens/RNFirebase';
import RNAPI from '../../Screens/RNAPI';
import RNComponents from '../../Screens/RNComponents';


const Tab = createBottomTabNavigator();
const RNBottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="RNFirebase" component={RNFirebase} />
        <Tab.Screen name="RNAPI" component={RNAPI} />
        <Tab.Screen name="RNComponents" component={RNComponents} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RNBottomNavigation;

