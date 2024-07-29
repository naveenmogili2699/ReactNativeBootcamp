import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from '../../LoginFunctionality/Intro';
import Login from '../../LoginFunctionality/Login';
import Contacts from '../../LoginFunctionality/Contacts';

const Stack = createNativeStackNavigator();
const LoginNavigations = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Intro' component={Intro}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Contacts' component={Contacts}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoginNavigations

const styles = StyleSheet.create({})