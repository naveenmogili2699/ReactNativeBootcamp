import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Share from 'react-native-share';

const share = () => {
    const options={
        message:"Hello",
        uri:"https://google.com",
        email:"kiran.bandi801@gmail.com",
        subject:"This is Subject",
        recipient:'919014825218' 
    }
    Share.open(options).then((res)=>console.log(res)).catch((err)=>console.log(err))
}

const RNSharing = () => {
  return (
    <View>
      <Text>RN Share</Text>
      
      {/* <TouchableOpacity onPress={share}>
        <Text>Share</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default RNSharing;

const styles = StyleSheet.create({})