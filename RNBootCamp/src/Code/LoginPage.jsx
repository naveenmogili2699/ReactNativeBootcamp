import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RNStackNavigation from '../Navigations/RNStack/RNStackNavigation'
import HomeScreen from '../Screens/HomeScreen'
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import VectorImage from 'react-native-vector-image';

const navcont = createNativeStackNavigator();
const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoggedin, setIsLoggedin] = useState(false)

    const pushCreds = {
        uname: username,
        pword: password
    }
    const clickSubmit = async () => {
        await AsyncStorage.setItem("UserCreds", JSON.stringify(pushCreds));
        Alert.alert("Congratulations " + username + " you have successfully logged in")
        setUsername('')
        setPassword('')
        setIsLoggedin(true)
    }

    const removeCreds = () => {
        AsyncStorage.removeItem("UserCreds")
        setIsLoggedin(false)
        Alert.alert("Please try to re-login")
    }

    const getUserCreds = async () => {
        const uCreds = await AsyncStorage.getItem("UserCreds")
        console.log("creds",uCreds)
        (uCreds)!==null? isLoggedin(true) : isLoggedin(false)
    }
    
    useEffect(()=>{
        getUserCreds()
        console.log("user creds stored")
     
        
    })

    return (


        <View>
            {!(isLoggedin) ? (
                // <Text>LoginPage</Text>
                <View style={styles.container}>
                    <Text style={styles.txtstyle}>User Name:</Text>
                    <TextInput placeholder='Enter User Name...'
                        value={username}
                        keyboardAppearance='100'
                        onChangeText={() => setUsername()}
                        style={styles.inputstyle}
                    />

                    <Text style={styles.txtstyle}>User Password:</Text>
                    <TextInput placeholder='Enter Password...'
                        value={password}
                        onChangeText={() => setPassword()}
                        style={styles.inputstyle}
                        keyboardAppearance='100'
                    />

                    <TouchableOpacity style={styles.submit} onPress={() => clickSubmit()}>
                        <Text style={styles.btntxt}>Submit</Text>
                    </TouchableOpacity>
                </View>
            ) :
            (
                <View>
                        <navcont.Screen name='Home' component={HomeScreen} />
                        {/* <HomeScreen/> */}
                        <TouchableOpacity style={styles.logout} onPress={() => removeCreds()}>
                        <Text style={styles.btntxt}>Logout</Text>
                    </TouchableOpacity>
                    
                </View>
            )} 
        </View>
    )
}

export default LoginPage

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
    },logout:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
    }
})

