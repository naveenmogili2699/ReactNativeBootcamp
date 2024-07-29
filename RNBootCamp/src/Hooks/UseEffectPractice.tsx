import { Button, StyleSheet, Text, View } from 'react-native'
import  React, { useState, useEffect } from 'react'

const UseEffectPractice = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
       console.log("use effect logged: "+count)
        
    },[])
  return (
    <View>
      <Text>UseEffect Practice</Text>
      <Text>Count : {count}</Text>
      <Button title='increase count' onPress={()=>setCount(count=>count+1)} />
    </View>
  )
}

export default UseEffectPractice

const styles = StyleSheet.create({})