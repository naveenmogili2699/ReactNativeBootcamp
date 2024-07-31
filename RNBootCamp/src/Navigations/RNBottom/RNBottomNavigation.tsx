import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';
import MapMethod from '../../Code/MapMethod';

const Tab = createBottomTabNavigator();
const RNBottomNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Details" component={DetailsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RNBottomNavigation;
const styles = StyleSheet.create({});
