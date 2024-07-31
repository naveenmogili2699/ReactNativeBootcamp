import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNStackNavigation from '../Navigations/RNStack/RNStackNavigation'
import HomeScreen from '../Screens/HomeScreen'
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const navcont = createNativeStackNavigator();
const Login = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const clickSubmit = async () => {
        try {
            await AsyncStorage.setItem("USERNAME", username)
            await AsyncStorage.setItem("PASSWORD", password)
            Alert.alert("Congratulations '" + username + "' you have successfully logged in")
            navigation.navigate('Contacts')
            setPassword('')
        }
        catch (error) {
            console.log(error)
        }

    }

    const removeCreds = () => {
        AsyncStorage.removeItem("USERNAME")
        AsyncStorage.removeItem("PASSWORD")
        Alert.alert("Please try to re-login")
    }

    const getUserCreds = async () => {
        const getusername = await AsyncStorage.getItem("USERNAME")
        const getpassword = await AsyncStorage.getItem("PASSWORD")

    }

    useEffect(() => {
        getUserCreds()
        console.log("user creds stored")


    })

    return (


        <View>
            <Text>LoginPage</Text>
            <View style={styles.container}>
            <Icon name="rocket" size={30} color="#900" />
                <Text style={styles.txtstyle}>User Name:</Text>
                <TextInput placeholder='Enter User Name...'
                    value={username}
                    onChangeText={(txt) => setUsername(txt)}
                    style={styles.inputstyle}
                />

                <Text style={styles.txtstyle}>User Password:</Text>
                <TextInput placeholder='Enter Password...'
                    value={password}
                    onChangeText={(txt) => setPassword(txt)}
                    style={styles.inputstyle}
                    keyboardAppearance='100'
                />

                <TouchableOpacity style={styles.submit} onPress={() => clickSubmit()}>
                    <Text style={styles.btntxt}>Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#777E8B;',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#01CBC6'
    },
    inputstyle: {
        borderWidth: 0.5,
        backgroundColor: '#EAF0F1',
        borderRadius: 10,
        width: '80%',
        height: 40,
        margin: 5,
        borderColor: '#01CBC6'

    },
    submit: {
        backgroundColor: '#01CBC6',
        padding: 10,
        width: '30%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginBottom: 10,
    },
    txtstyle: {
        fontSize: 16,
    },
    btntxt: {
        fontWeight: 'bold',
    }, logout: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

