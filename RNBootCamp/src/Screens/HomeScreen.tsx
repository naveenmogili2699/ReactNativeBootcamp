import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = ({}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.homescreen}>
      <Text style={styles.textstyle}>Home Screen</Text>
      <Button title='Goto About Page'
      onPress={()=>navigation.navigate('About')}
      />
      <Button 
      title='Goto Details Page'
      onPress={()=>navigation.navigate('Details')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    homescreen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textstyle:{
        fontSize:20,
        fontWeight:'bold',
    }
})