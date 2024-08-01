import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';


import MapMethod from '../../Components/CoreComponents/MapMethod';
import Intro from '../../Screens/LoginFunctionality/Intro';
import FlatListPractice from '../../Components/CoreComponents/FlatListPractice';
import StudentList from '../../Components/CoreComponents/StudentList';
import AsyncStorageScreen from '../../Components/CoreComponents/AsyncStorageScreen';
import Basics1 from '../../Components/CoreComponents/Basics1';
import ProgramsList from '../../Components/CoreComponents/ProgramsList';

const Stack = createNativeStackNavigator();
const RNStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='About' component={AboutScreen} />
        <Stack.Screen name='Details' component={DetailsPage} />

        
        <Stack.Screen name='Basics1' component={Basics1} />
        <Stack.Screen name='FlatListPractice' component={FlatListPractice} />
        <Stack.Screen name='StudentList' component={StudentList} />
        <Stack.Screen name='ProgramsList' component={ProgramsList} />



        <Stack.Screen name='MapMethod' component={MapMethod} />
        
        
        <Stack.Screen name='Async' component={AsyncStorageScreen} />
        <Stack.Screen name='Intro' component={Intro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RNStackNavigation

const styles = StyleSheet.create({})