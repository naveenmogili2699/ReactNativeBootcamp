import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Share from 'react-native-share';
import 'react-native-gesture-handler';


const Shareing = () => {
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
  return (
    <View>
      <Text>Shareing</Text>
      <TouchableOpacity style={styles.btn} >
        <Text style={styles.txt} onPress={share}>Share</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Shareing

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'red',
        
    },
    txt:{
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        padding:10
    }
})