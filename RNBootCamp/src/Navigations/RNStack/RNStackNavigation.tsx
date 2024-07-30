import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../Screens/HomeScreen';
import AboutScreen from '../../Screens/AboutScreen';
import DetailsPage from '../../Screens/DetailsPage';
import MapMethod from '../../CoreComponents/MapMethod';
import FlatListPractice from '../../CoreComponents/FlatListPractice';
import StudentList from '../../CoreComponents/StudentList';
import AsyncStorageScreen from '../../CoreComponents/AsyncStorageScreen';
import Intro from '../../LoginFunctionality/Intro';

const  Stack = createNativeStackNavigator();
const RNStackNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Intro' component={Intro}/>
          <Stack.Screen name='Home' component={HomeScreen}/>
          <Stack.Screen name='About' component={AboutScreen}/>
          <Stack.Screen name='Details' component={DetailsPage}/>
          <Stack.Screen name='MapMethod' component={MapMethod} />
          <Stack.Screen name='FlatList' component={FlatListPractice}/>
          <Stack.Screen name='StundetsList' component={StudentList} />
         <Stack.Screen name='Async' component={AsyncStorageScreen} />
         
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default RNStackNavigation

const styles = StyleSheet.create({})