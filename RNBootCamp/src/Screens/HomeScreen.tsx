import { Alert, Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deposit, totalBlc } from '../Redux/ReduxToolKit/balanceSlice';
import RNButton from '../Components/Atoms/RNButton';
import { screennavigation } from '../Utils/Helper';

const HomeScreen = ({ }) => {

  const blc = useSelector(totalBlc)

  return (
    <View style={styles.homescreen}>
      <Text style={styles.textstyle}>Home Screen</Text>

      <Text>Balance : {blc}</Text>

      <Button title='Goto About Page'
        onPress={() => screennavigation('About')}
      />
      <Button
        title='Goto Details Page'
        onPress={() => screennavigation('Details')}
      />

      <ScrollView >
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <RNButton
          buttonName={'Basics'}
          onClick={() => screennavigation('Basics1')}
        />
        <RNButton
          buttonName={'Flatlist Paractice'}
          onClick={() => screennavigation('FlatListPractice')}
        />
        <RNButton
          buttonName={'StudentList'}
          onClick={() => screennavigation('StudentList')}
        />
        <RNButton
          buttonName={'ProgramsList'}
          onClick={() => screennavigation('ProgramsList')}
        />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
  },
  textstyle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})