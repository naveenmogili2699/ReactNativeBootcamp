import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider1 from '@react-native-community/slider';

const SliderBar = () => {
  return (
    <View>
      <Text>RNSlider</Text>
      <Slider1
        style={{width: 300,height:50}}
        minimumValue={0}
        maximumValue={1000}
        minimumTrackTintColor="red"
        maximumTrackTintColor="purple"
        lowerLimit={100}
        // upperLimit={800}
        // onSlidingStart={()=>console.log("sliding started")}
        // onSlidingComplete={()=>console.log("sliding end")}
        // onValueChange={()=>console.log("value is changing")}
        vertical={true}
      />
    </View>
  )
}

export default SliderBar;

const styles = StyleSheet.create({})