import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MenuOption } from 'react-native-popup-menu'
import Enty from 'react-native-vector-icons/Entypo'

const NotApplicable = ({text,iconName,value}) => {
  return (
    <MenuOption
        onSelect={()=>Alert.alert(`you clicked ${value}`)}
        customStyles={{
            optionWrapper:{
                flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
            }
        }}
    >
        <Text>{text}</Text>
        <Enty name={iconName} size={25} color={'black'}/>
    </MenuOption>
  )
}

export default NotApplicable

const styles = StyleSheet.create({})