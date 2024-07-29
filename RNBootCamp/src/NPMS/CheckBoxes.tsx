import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

const CheckBoxes = () => {
    const [isChecked, setIsChecked] = useState(false);
    
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text> value: {isChecked?"Checked":"Not Checked"} </Text>
        <CheckBox value={isChecked} onValueChange={(val) => setIsChecked(val)} {isChecked?'red':'blue'} />
        <Button
          onPress={() => setIsChecked(!isChecked)}
          title="toggle the value above"
        />
      </View>
    </View>
  
  )
}

export default CheckBoxes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
      text: {
        fontSize: 24,
        marginBottom: 20,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      label: {
        marginLeft: 8,
        fontSize: 18,
      },
})