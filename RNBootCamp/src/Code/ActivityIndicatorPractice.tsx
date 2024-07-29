import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActivityIndicatorPractice() {
  return (
    <View>
      <Text>ActivityIndicator Practice</Text>
      <View style={styles.container}>
       <ActivityIndicator />
       <ActivityIndicator size={'large'} color={'red'}/>
       <ActivityIndicator size={'large'} color={'green'} animating={true} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center' ,
        flexDirection:'row',
        
    }
})