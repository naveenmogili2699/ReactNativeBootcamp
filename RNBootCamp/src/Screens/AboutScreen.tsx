import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableHighlightComponent, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { withdraw, totalBlc, deposit } from '../Redux/ReduxToolKit/balanceSlice';


const AboutScreen = ({ navigation }) => {
  const blc = useSelector(totalBlc)
  const dispatch = useDispatch()
  const [withdrawAmount, setWithdrawAmount] = useState(0)

  const handleChange = (val) => {
    setWithdrawAmount(val);
  };

  return (
    <View style={styles.aboutscreen}>
      <Text style={styles.textstyle}>About Screen</Text>
      <TouchableHighlight activeOpacity={0.7} style={styles.button} onPress={() => 0}>
        <View>
          <Text style={styles.buttonst} onPress={() => navigation.navigate('Details')}>Goto Details Page</Text>
        </View>
      </TouchableHighlight>

      <Text>Balance : {blc}</Text>
      <KeyboardAvoidingView
        //  behavior={ Platform.OS === 'android' ? 'padding' : undefined }
        keyboardVerticalOffset={50}
        behavior='position'
        contentContainerStyle={styles.cont}
      >
        <TextInput
          placeholder='Enter Withdraw Amount'
          keyboardType='numeric'
          onChangeText={(va) => handleChange(va)}
        // onSubmitEditing={()=>setDepositAmount(0)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => dispatch(withdraw(withdrawAmount))}
        style={styles.withdraw}
      >
        <Text>Withdraw</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({
  aboutscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  textstyle: {
    fontSize: 18,
    padding: 12,
  },
  buttonst: {
    fontSize: 18,
    padding: 12,

  },
  withdraw: {
    borderWidth: 1,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'green',
    borderRadius: 8,
  },
  cont: {
  }
})