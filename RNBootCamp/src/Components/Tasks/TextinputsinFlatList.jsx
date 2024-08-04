import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View,FlatList } from 'react-native'
import React, { useState } from 'react'

const TextinputsinFlatList = () => {
    const [name, setName] = useState("")
    const [showName, setShowName] = useState("")
    const [newArr, setNewArr] = useState([])
    const displayName = () => {
        setShowName(name);
        setName("")

        if (name!==""){
            setNewArr([...newArr,{nameID:name}].reverse())
        }
    }

    const pushtoArray = () => {

    }
    return (
        <View>
            <View style={styles.conatiner}>
                
                <Text>Name:{showName===''?"Enter Some Text": showName} </Text>
                <TextInput placeholder='Enter Name... '
                    onChangeText={(val) => setName(val)}
                    value={name}
                    style={styles.txtinput}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => displayName()}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>

                <FlatList
                    //data ={[1,2,3,4]}
                    data={newArr}
                    renderItem = {({item,index})=>{
                        return(
                              <Text style={styles.ftext}>{item.index}:{item.nameID}</Text>   
                        );
                    }}
                />

            </View>

        </View>
    )
}

export default TextinputsinFlatList

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: 'white',
        justifyContent: 'center',
        marginHorizontal: 16
    },
    txtinput: {
        borderWidth: 1
    },
    button:{
        backgroundColor:'green',
        alignSelf:'center',
        width:80,
        height:30,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginTop:10
    },
    ftext:{
        borderWidth:1,
        margin:1,
        paddingLeft:5
    }

})