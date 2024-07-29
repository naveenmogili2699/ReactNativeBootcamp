import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageonImage = () => {
  return (
    <View style={styles.container}>
      <Text>ImageonImage 904597</Text>
      <ImageBackground
        source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
        style={{  flex: 1, justifyContent: 'center',height:500 }}
        resizeMode="cover"
      >
        
        <Text style={styles.txt}>Text on Image</Text>
        <Image 
        style={{ flexDirection:'row', height:100, width:100,alignSelf:'flex-end', borderRadius:50, marginBottom:1 }}
        source={{uri: 'https://images.unsplash.com/photo-1570651851409-93d5add773d7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        />
      </ImageBackground>
    </View>
  )
}

export default ImageonImage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  txt:{
    fontSize:30,
    fontWeight:'bold',
    backgroundColor: '#000000c0',
    color:'white',
    textAlign:'center',
    marginTop:200,
    marginBottom:150
  }
})