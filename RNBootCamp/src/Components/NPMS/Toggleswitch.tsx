import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ToggleSwitch from 'toggle-switch-react-native'

const Toggleswitch = () => {
    const [toggleSwitch, setToggleSwitch] = useState(false)
    const changeToggle = () => {
        setToggleSwitch(!toggleSwitch)
    }
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', 
                backgroundColor:toggleSwitch?'yellow':'red'
            }}
        >
            {toggleSwitch ?
                <Text>Toggle switch enabled</Text> : <Text>Toggle switch disabled</Text>}
            <ToggleSwitch
                isOn={toggleSwitch}
                size={'large'}
                onColor={'green'}
                offColor={'gray'}
                onToggle={() => changeToggle()}
            />
        </View>
    )
}

export default Toggleswitch;

const styles = StyleSheet.create({})