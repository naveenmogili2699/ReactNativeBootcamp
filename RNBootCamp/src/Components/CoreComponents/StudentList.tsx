import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
Data= [
    {
        id:'1',
        name:'Java'
    },
    {
        id:'2',
        name:'DotNet'
    },
    {
        id:'3',
        name:'Python'
    },
    {
        id:'3',
        name:'Python'
    },
    {
        id:'1',
        name:'Java'
    },
    {
        id:'2',
        name:'DotNet'
    },
    {
        id:'3',
        name:'Python'
    },
    {
        id:'3',
        name:'Python'
    },
];
const StudentList = () => {
  return (
    <ScrollView>
        <Text>Map </Text>
        {Data.map((item)=>{
        return(
            <View>
                <Text >{item.id}</Text>
                <Text style={styles.item}>{item.name}</Text>
            </View>
            
        );
    })}  
              









              
      
    </ScrollView>
  )
}

export default StudentList

const styles = StyleSheet.create({
    item: {
        padding: 20,
        fontSize: 15,
        margin:8,
        marginHorizontal:16,
        marginVertical:8,
        backgroundColor:'red'
      }
})