import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';

const RNProgress = () => {
  return (
    <View>
      <Text>Progress</Text>
      <View>
        <Progress.Bar progress={0.3} width={200} />
       
      </View>
      <View>
         {/* <Progress.Circle indeterminate={true} size={50}/> */}
        {/* <Progress.Pie progress={0.5} size={50}/> */}
      </View>
    </View>
  )
}

export default RNProgress

const styles = StyleSheet.create({})