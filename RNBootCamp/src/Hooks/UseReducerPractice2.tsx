import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useReducer } from 'react'


const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1, visible:state.visible}
        case "DECREAMENT":
            return {count:state.count-1, visible:state.visible}
        case "ToggleText":
            return {count:state.count+1, visible:!state.visible}
        default:
            return state
    }
}
export default function UseReducerPractice2() {
    const [state, dispatch] = useReducer(reducer, {count:0,visible:true})
  return (
    <View>
      <Text>UseReducer Practice2</Text>
      <Text>{state.count}</Text>
      <Button title='Click here'
        onPress={()=>{
            dispatch({type: "INCREAMENT"})
            dispatch({type: "ToggleText"})
        }}
      />
       {state.visible && <Text>I am Visible</Text>}
       {/* <Button title='Decrease'
        onPress={()=>{
            dispatch({type: "DECREAMENT"})
            dispatch({type: "ToggleText"})
        }}
        />
        {state.visible && <Text>I am Visible</Text>} */}
    </View>
  )
}

const styles = StyleSheet.create({})