import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AlertsPractice = () => {
  return (
    <View>
      <Text>Alerts Practice</Text>
      <Button 
      title='Alert 1'
      onPress={()=>Alert.alert("invalid input Hi")}
      />
      <Button 
      title='Alert 2'
      onPress={()=>Alert.alert("invalid input", "Invalid Password")}
      />
      <Button 
      title='Alert 3'
      onPress={()=>Alert.alert("invalid input", "Invalid Password",[
        {
            text:'OK',
            onPress:()=>console.log("Pressed OK")
        },
        {
            text:'Cancel',
            onPress:()=>console.log("Pressed Cancel")
        }
      ])}
      />
    </View>
  )
}

export default AlertsPractice;

const styles = StyleSheet.create({})