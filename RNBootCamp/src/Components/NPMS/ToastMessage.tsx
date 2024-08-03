import { StyleSheet, Text, View,Image, Button } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';

const ToastMessage = () => {

    const showToast = ()  => {
        Toast.show({
            type:"info",//success, error
            text1:"Hello",
            text2:"This is something",
            text1Style:{
                fontSize:20,
                color:'green'
            }
        })
    }
  return (
    <View>
      <Text>Toast Messages</Text>
      <Image 
      source={require("../../Images/one.jpg")}
      style={{height:500, width:'90%',alignSelf:'center', borderColor:'green', borderWidth:1,borderRadius:12}}
      />
      <Toast />
      <Button title='show Toast' onPress={showToast}/>
    </View>
  )
}

export default ToastMessage

const styles = StyleSheet.create({})