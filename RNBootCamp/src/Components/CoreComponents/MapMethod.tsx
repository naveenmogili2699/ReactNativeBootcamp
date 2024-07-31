import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const MapMethod = () => {
    const [count,setCount]=useState(0)
  return (
    <View>
      <Text>Map Method</Text>
      <View style={styles.container}>
        <View style={styles.box}>
            <Button
                onPress={()=>setCount(count+1)}
                title='+'
            />
        </View>
        <View  style={styles.box}>
            <Text style={{fontSize:30, fontWeight:'bold'}}>{count}</Text>
        </View>
        <View style={styles.box}>
            <Button 
                onPress={()=>setCount(count-1)}
                title='-'
            />
        </View>
      </View>
    </View>
  )
}

export default MapMethod

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:96,
        flexDirection:'row',
        paddingBottom:10,
        
    },
    box:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        height:30,
        width:30,
    }
})