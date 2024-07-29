import { StyleSheet, Text, View, } from 'react-native'
import React, { useMemo, useState } from 'react'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

const RadioButtonGroup = () => {
    const [selectedID, setSelectedID] = useState()
    const radiobtns = useMemo(()=>([
        {
            id: 1,
            label: 'Red',
            value: 'red'
        },
        {
            id: 2,
            label: 'Green',
            value: 'green'
        },
        {
            id: 3,
            label: 'Blue Not Red',
            value: 'blue'
        },
    ]),[]) 

    // const radiobtns = [
    //     [
    //         {
    //             id: 1,
    //             label: 'Red',
    //             value: 'red'
    //         },
    //         {
    //             id: 2,
    //             label: 'Green',
    //             value: 'green'
    //         }
    //     ]
    // ]

    return (
        <View>
            <Text>RadioButtonGroup</Text>
            <RadioGroup
                radioButtons={radiobtns }
                onPress={setSelectedID}
                selectedId={selectedID}
                layout='coloumn'
            >
                
            </RadioGroup>
        </View>
    )
}

export default RadioButtonGroup

const styles = StyleSheet.create({})