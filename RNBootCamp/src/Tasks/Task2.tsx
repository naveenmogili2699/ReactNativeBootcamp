import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Task2 = () => {
    const [name, setName] = useState("Kiran");
  return (
    <View>
      <Text>Task2</Text>
      <View>
        <Text>Name: {name}</Text>
        {/* <TextInput placeholder='Enter Name Here'
            style={styles.inputstyle}
            onChangeText={(value)=>setName(value)}
        /> */}
        <TextInput 
            placeholder='Enter Name Here'
            style={styles.inputstyle}
            onSubmitEditing={(value)=>setName(value.nativeEvent.text)}
        /> 
       
      </View>
    </View>
  )
}

export default Task2

const styles = StyleSheet.create({
    inputstyle:{
        width:200,
        height:40,
        borderColor:'green',
        borderWidth:0.5,
        backgroundColor:'white',
        marginHorizontal:20,
    }
})