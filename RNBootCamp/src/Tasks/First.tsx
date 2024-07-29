import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useReducer, useState } from 'react'

const reducer = (state, action) =>{
    switch(action.type){
        case "ONE":
            return {name:"Java",bgcolor:'red'}
        case "TWO":
            return {name:"Python",bgcolor:'blue'}
        case "THREE":
            return {name:"React",bgcolor:'green'}
        default:
            return state.name;
    }
    
}

const First = () => {
    const [state, dispatch] = useReducer(reducer, {name:'Kiran',bgcolor:'yellow'})
    const [buttonText, setButtonText] = useState("Kiran")
  return (
    <View>
      <Text>First Task</Text>
      <TouchableOpacity 
        
        style={{backgroundColor:state.bgcolor, justifyContent:'center', 
        alignItems:'center',marginHorizontal:120,textAlign:'center', marginBottom:10,
        height:25,
        borderRadius:8,
        }}
        >
            <Text>{state.name}</Text>
      </TouchableOpacity>
      <View style={styles.container}>

        {/* <TouchableOpacity>
            <Text> {buttonText}</Text>
        </TouchableOpacity> */}

        <TouchableOpacity 
            style={[styles.btnstyle, styles.java]}
            onPress={()=>{
                dispatch({type:"ONE"}) 
            }}
        >
            <Text style={styles.txts}>Java</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.btnstyle, styles.python]}
            onPress={()=>{
             dispatch({type:"TWO"}) 
            }}
        >
            <Text style={styles.txts}>Python</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
            style={[styles.btnstyle, styles.react]}
            onPress={()=>{
                dispatch({type:"THREE"}) 
               }}
        >
            <Text style={styles.txts}>React</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default First;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    btnstyle:{
        flex:1,
        fontSize:16,
        width:50,
        height:25,
        borderRadius:8,
    },
    java:{
        backgroundColor:'red'
    },
    python:{
        backgroundColor:'blue'
    },
    react:{
        backgroundColor:'green'
    },
    txts:{
        flex:1,
        justifyContent:'space-around',
        textAlign:'center',
        
    }
})