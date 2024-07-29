import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Share from 'react-native-share';

const CompShare = ({message,uri}) => {
    const share = () =>{
        const options={
            message:"Hello",
            uri:"https://google.com",
            email:"kiran.bandi801@gmail.com",
            subject:"This is Subject",
            recipient:'919014825218'
        }
        Share.open(options).then((res=>console.log(res)))
    }
  return (
    <View>
      
    </View>
  )
}

export default CompShare

const styles = StyleSheet.create({})