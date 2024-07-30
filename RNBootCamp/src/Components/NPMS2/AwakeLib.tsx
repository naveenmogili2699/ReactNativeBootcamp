import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import KeepAwake, { useKeepAwake } from '@sayem314/react-native-keep-awake';

const AwakeLib = () => {
    useKeepAwake()
  return (
    <View>
        <KeepAwake/>
      <Text>Keep Awake Lib</Text>
    </View>
  )
}

export default AwakeLib

const styles = StyleSheet.create({})