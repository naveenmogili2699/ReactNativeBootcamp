import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageScreen = () => {
  const myData =  {
    name:"Kiran",
    mobile: "9876543211"
  }

  const myData2 =  {
    name:"Bandi",
    mobile: "90909090"
  }

  const StoreUser = async () => {
    try
    {
      await AsyncStorage.setItem("userData", JSON.stringify(myData))
      console.log("data stored")
    }
    catch(error)
    {
      console.log(error);
    }
    
  }

  const MergeUser = async () => {
      const MergeUserName = await AsyncStorage.mergeItem("userData", JSON.stringify(myData2))
      console.log("Merge User name:",MergeUserName)
  }

  const GetData = async () => {
   try{
    const fetchData = await AsyncStorage.getItem("userData")
    //const savedUser = JSON.parse(fetchData)
    console.log("data retrived",fetchData)
   }
   catch(error)
   {
    console.log(error)
   }
  }

  const RemoveItems = () => {
    AsyncStorage.removeItem("userData")
    console.log("user data deleted")
  }

  const firstdata = ["data1",JSON.stringify(myData)]
  const secondtdata = ["data2",JSON.stringify(myData2)]



  const multipleSet = async() => {
     await AsyncStorage.multiSet([firstdata,secondtdata]);
     console.log("Multiple Set ")
  }

  const multipleFetch = async () => {
    const multiplefetch = await AsyncStorage.multiGet(["data1", "data2"])
    //const convertedmultifetch = JSON.parse(multiplefetch)
    console.log("Multiple Get", multiplefetch)
  }
  return (
    <View>
      <Text>AsyncStorageScreen</Text>
      <TouchableOpacity style={styles.btnstyle} onPress={()=>StoreUser()}>
        <Text>Store User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle}  onPress={()=>GetData()}>
        <Text>Get User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle}  onPress={()=>MergeUser()}>
        <Text>Merge User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle}  onPress={()=>RemoveItems()}>
        <Text>Remove user data</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle}  onPress={()=>multipleSet()}>
        <Text>MutiSet</Text>
      </TouchableOpacity>
      

      <TouchableOpacity style={styles.btnstyle}  onPress={()=>multipleFetch()}>
        <Text>MultiGet</Text>
      </TouchableOpacity>
      
      
    </View>
  )
}

export default AsyncStorageScreen

const styles = StyleSheet.create({
  btnstyle:{
    backgroundColor:'red',
    margin:3,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center'
  }
})