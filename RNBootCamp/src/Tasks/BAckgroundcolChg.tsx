import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {Circle,Triangle} from 'react-native-shape'

const BAckgroundcolChg = () => {
    const [bgcolor, setBgColor] = useState("#FFFFFF")
    const changebgColor = () => {
        const hexaRange = "1234567890ABCDEF"
        let color = "#"
        for (let index = 0; index < 6; index++) {
            color += hexaRange[Math.floor(Math.random()*10)]

        }
        setBgColor(color)
        // console.log(bgcolor)
        // console.log(Math.floor(Math.random()*20))
    }
    return (
        <View style={[{ backgroundColor: bgcolor},styles.container]} >
            <StatusBar networkActivityIndicatorVisible={true} backgroundColor={bgcolor} />
            <Circle/>
            <Triangle color="red" scale={1} rotate={60}/>
            <Text>Background color Change by clicking button</Text>
            <TouchableOpacity style={[{ backgroundColor: bgcolor },styles.btn]}
                onPress={changebgColor}
            >
                <Text>Press me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default BAckgroundcolChg

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
    }
})