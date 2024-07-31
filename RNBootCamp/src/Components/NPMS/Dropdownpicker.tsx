import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdownpicker = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple'},
        { label: 'Banana', value: 'banana' },
        { label: 'Mango', value: 'mango', parent: 'apple' },
        { label: 'Orange', value: 'orange'},
        { label: 'Kiwi', value: 'kiwi' },
        { label: 'Caret', value: 'caret', disable:true },

    ]);
    return (
        <View>
            <Text>Dropdownpicker</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                multiple={true}
                min={0}
                max={5}
                mode="BADGE"
                badgeColors={'#e76f51'}
                searchable={true}
                searchPlaceholder='seach fruit'
                dropDownDirection={'AUTO'}
                bottomOffset={200}
            />
        </View>
    )
}

export default Dropdownpicker

const styles = StyleSheet.create({})