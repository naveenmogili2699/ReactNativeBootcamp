import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function UseReducerPractice() {
    const [count,setCount] = useState(0)
    const [visible, setVisible] = useState(true)
  return (
    <View>
      <Text>UseReducer Practice</Text>
      <Text>Count: {count}</Text>
      <Button title='Click Me' 
        onPress={()=>{
            setCount(count+1);
            setVisible(!visible);
        }
        }
      />
      {visible && <Text>I am Visible</Text>}
      
    </View>
  )
}

const styles = StyleSheet.create({})