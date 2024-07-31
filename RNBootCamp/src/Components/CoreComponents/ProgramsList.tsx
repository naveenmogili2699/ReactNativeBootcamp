import { FlatList, StyleSheet, Text, View } from 'react-native'
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
        id:'4',
        name:'Python'
    },
    {
        id:'5',
        name:'Java'
    },
    {
        id:'6',
        name:'DotNet'
    },
    {
        id:'7',
        name:'Python'
    },
    {
        id:'8',
        name:'Python'
    },
];
const ProgramsList = () => {
  return (
    <View>
        <Text>Flat List </Text>
        <FlatList 
            data = {Data}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
            
        />
        <Text>end</Text>
    </View>
  )
}

export default ProgramsList

const styles = StyleSheet.create({
    item: {
        padding: 20,
        fontSize: 15,
        margin:8,
        marginHorizontal:16,
        marginVertical:8,
        backgroundColor:'blue'
      }
})