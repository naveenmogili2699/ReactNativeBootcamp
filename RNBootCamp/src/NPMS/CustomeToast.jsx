import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const CustomeToast = () => {

  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'blue' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 20,
          fontWeight: '400'
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({ text1,text2, props }) => (
      <View style={{ height: 50, width: '80%', backgroundColor: 'yellow', borderLeftColor:'pink', borderLeftWidth:5 }}>
        <Text>{text1}</Text>
        <Text>{text2}</Text>
      </View>
    )
  };

  const showCustomToast = () => {
    Toast.show({
      type: 'tomatoToast',
      text1: 'Hello',
      text2: 'How are you'
    })
  }

  return (
    <View>
      <Text>Custome Toast</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <Button title='Custome Toast' onPress={showCustomToast} />
      </View>
      <Toast config={toastConfig} />
    </View>
  )
}

export default CustomeToast

const styles = StyleSheet.create({})