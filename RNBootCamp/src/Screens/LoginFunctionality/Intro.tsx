import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import {useNavigation} from '@react-navigation/native';

const Intro = ({}) => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            isLoggedin()
        }, 3000)
    }, [])

    const isLoggedin = async () => {
        const userID = await AsyncStorage.getItem("USERNAME")
        if(userID!==null){
            navigation.navigate('Contacts')
        }
        else{
            navigation.navigate(Login)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Welcome to my App</Text>
        </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt:{
        fontSize:20,
        color:'blue'
    }
})