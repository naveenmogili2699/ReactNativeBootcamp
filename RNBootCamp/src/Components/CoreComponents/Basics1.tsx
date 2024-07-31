
import { StyleSheet, Text, View,TextInput, ScrollView, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Basics1 = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const handlePress = () => false
  return (
    <View>
      <Text style={styles.textstyle1}>App</Text>
      <Text style={styles.style2}>App</Text>
      <View>
        <Text style={styles.style3}>Hello React</Text>
        <Text style={{color:'green', justifyContent:'flex-end' }}>Welcome to React</Text>
        <TextInput>Please enter some text</TextInput>
      </View>
      
      <View  style={styles.container2}> 
        <TextInput  multiline={true} numberOfLines={4}  >Allows the input to span multiple lines. If true, the text input can display multiple lines of text.</TextInput>
        <Text style={styles.inputName}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder='**********' />
        <Text style={styles.inputName}>Numbers</Text>
        <TextInput style={styles.input} keyboardType='numeric' placeholder='nmbers' />
        <Text style={styles.inputName}>EMail</Text>
        <TextInput style={styles.input} keyboardType='email-address' /> 
        <Text style={styles.inputName}>Auto Correct</Text>
        <TextInput style={styles.input} autoCorrect={true} placeholder='autocorrect' />
        <Text style={styles.inputName}>Auto Cappitalize</Text>
        <TextInput 
          style={styles.input} autoCapitalize='sentences' onChangeText={onChangeText} 
          placeholder='text enter'
          /> 
        <TextInput editable={false} > Editable or Not?</TextInput>
        <Text style={styles.inputName}>Enter Message</Text>
        <TextInput style={styles.msginput} multiline={true} numberOfLines={4} />
        <Text>Button</Text>
        
        <Button title='Submit' onPress={handlePress}/>
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}} style={styles.Image}/>
        <Text style={{ alignItems:'flex-end', textAlign:'right'  }}>Random Text</Text>
        <Text style={{ textAlign:'center' }}>Random Text</Text>
        <Text style={{ textAlign:'left' }}>Random Text</Text>
        <Text style={{  justifyContent:'center',alignItems:'center' }}>Random Text</Text>
        <Text>Flex Box </Text>
        <View style={styles.container3}>
          <View style={[styles.view1,styles.boxsize]}>
            <Text style={styles.textalign}> FlexBox1</Text>
          </View>
          <View style={[styles.view2,styles.boxsize]}>
            <Text style={styles.textalign2}>FlexBox2</Text>
          </View>
          <View style={[styles.view3,styles.boxsize]}>
            <Text style={styles.textalign3}>FlexBox3</Text>
          </View>
        </View>
      </View>

     
    </View>
    
    
  )
}

export default Basics1

const styles = StyleSheet.create({
  inputName:{
    paddingLeft:2,
    color:'red'
  },
  button:{
    padding:20,
    borderWidth:1,
  },
  Image:{
    height:120,
    margin:12,
    padding:6,
    borderRadius:12,
  },
  msginput:{
    height:120,
    margin:12,
    borderWidth:1,
  },
  textstyle1:{
    
    justifyContent:'flex-start',
    alignItems:'center',
    color:'red'
  },
  style2:{
    justifyContent:'flex-end',
    color:'blue'
  },
  style3:{
    alignItems:'baseline'
  },
  container2:{
    
  },
  input:{
    height:40,
    margin:12,
    borderWidth:1,
    padding:10,
  },
  container3:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    margin:5,
  },
  view1:{
    backgroundColor:'gray'
  },
  view2:{
    backgroundColor:'orange'
  },
  view3:{
    backgroundColor:'pink'
  },
  boxsize:{
    height:100,
    width:100,
    margin:5,
    borderRadius:5,
  },
  textalign:{
    textAlign:'center',
  },
  textalign2:{
    textAlign:'right',
  },
  textalign3:{
    textAlign:'left',
  }
})

