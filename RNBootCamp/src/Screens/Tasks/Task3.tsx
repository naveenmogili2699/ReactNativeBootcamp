import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Task3 = () => {
    const [data, setData] = useState([{ name: 'ketan' }]);
    const [name, setName] = useState('');
    // const [inputValue, setInputValue] = useState();
    // const  handlePress = () => {
    //     console.log(inputValue)
    // }
    return (
        <View style={styles.container}>
            <Text>Name : {name}</Text>
            <TextInput
                style={{ backgroundColor: 'white', padding: 10, marginTop: 10 }}
                onChangeText={() => setName()}
                placeholder={'enter name'}
                value={name}
            />
            <Button
                title='add me'
                onPress={() => {
                    if (name) setData([...data, { name: name }]);
                    console.log('hi');
                }}
            />
            <FlatList
                keyExtractor={(item) => item}
                data={data}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />


            {/* <TextInput placeholder='Enter Text...' value={inputValue} onChangeText={(text)=>setInputValue(text)}></TextInput>
        <Button title='Press Me' onPress={handlePress} /> */}


        </View>
    );
}

export default Task3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
})