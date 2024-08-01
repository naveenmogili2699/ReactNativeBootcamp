import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface RNButton {
  buttonName: string,
  onClick: () => void
}

const RNButton = ({ buttonName, onClick }: RNButton) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={styles.mainContainer}
      onPress={onClick}
    >
      <Text style={styles.title}> {buttonName} </Text>
    </TouchableOpacity>
  )
}

export default RNButton

const styles = StyleSheet.create({
  mainContainer: {
    height: 50,
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
})