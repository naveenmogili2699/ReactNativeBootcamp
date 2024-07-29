import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'


export default function UseRefPractice() {
  const [inputValue, setInputValue] = useState(0)
  const count = useRef(0);
  const focusTextBox = useRef()

  function handleClick() {
    count.current = count.current+1
    console.log("Count: ",count.current)
  }
  function focusText(){
    focusTextBox.current.focus();
  }
  
  return (
    <View>
      <Text style={styles.textstyle} >UseRef Practice</Text>
      <View style={styles.container}>
        <View>
          <TextInput style={styles.inputText} placeholder='enter test' ref={focusTextBox}></TextInput>
        </View>

        <View style={styles.container2}>
          <TouchableOpacity style={styles.focus}>
            <Text style={{fontSize:16,justifyContent:'center', 
              padding:5}}
              onPress={focusText}
              >
                Cleick Here to Focus
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button title='Click Me' onPress={handleClick} />
      <Text>Count: {count.current}</Text>
      <Button title='Click Me 2' onPress={()=>(setInputValue(inputValue+1))} />
      <Text>{inputValue}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'stretch'
    },
    textstyle:{
        fontSize:20,
        fontWeight:'semibold',
        alignItems:'stretch',
        
    },
    inputText:{
      borderColor:'black',
      borderRadius:5,
      borderWidth:1,
      margin:10,
      width:180,
    },
    focus:{
      backgroundColor:'green',
      height:30,
      justifyContent:'center',
      borderRadius:8,
    },
    container2:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }
})