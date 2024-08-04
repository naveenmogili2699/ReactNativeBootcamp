import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native';
const Contacts = () => {

    const [userArray, setUserArray]=useState([])
    const navigation = useNavigation();
    const deleteCreds = () => {
        AsyncStorage.removeItem("USERNAME")
        navigation.navigate('Home')
    }

    const getcreds = async() => {
        const user = await AsyncStorage.getItem("USERNAME")
        const pass = await AsyncStorage.getItem("PASSWORD")
        setUserArray([...userArray,{USER:user,PASS:pass}])
    }
    useEffect(()=>{
        getcreds()
        console.log("User Array", userArray)
    },[])
    return (
        <View>
            <Text>Contacts</Text>
            <FlatList
                
                data={userArray}
                renderItem={({item}) => (
                    <View>
                        <Text style={styles.flatstyle}>UserName: {item.USER} Password: {item.PASS}</Text>
                    </View>
                )}
            />
            <TouchableOpacity onPress={()=>deleteCreds()}>
                <Text>Dlete Creds</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Contacts

const styles = StyleSheet.create({
    flatstyle:{
        borderWidth:1,
        padding:20,
        margin:2,
        borderRadius:6,
    }
})