import { StyleSheet, Text, View, } from 'react-native'
import React,{useRef, useState} from 'react'
import { Picker } from '@react-native-picker/picker'


const PickerPractice = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const pickerRef = useRef("");

function open() {
  pickerRef.current.focus();
}

function close() {
  pickerRef.current.blur();
}

  return (
    <View>
      <Text>PickerPractice</Text>
      <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)}
      >
        <Picker.Item label='Java' value='java'/>
        <Picker.Item label='DotNet' value='dotNet'/>
        <Picker.Item label='Python' value='python'/>
      </Picker>
    </View>
  )
}

export default PickerPractice

const styles = StyleSheet.create({})