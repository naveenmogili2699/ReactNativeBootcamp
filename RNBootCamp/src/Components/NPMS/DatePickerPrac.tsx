import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'

const DatePickerPrac = () => {
  const [open,setOpen]=useState(false)
  const [date,setDate]=useState(new Date())
  return (
    <View>
      <Text>DatePicker</Text>
      {/* <Button title='Date' onPress={()=>setOpen(true)}/> */}
      <DatePicker
         date={date} // Initial date from state
         mode="date" // The enum of date, datetime and time
         open={open}
         placeholder="select DOB" 
         format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
      />
      <Text>{date}</Text>
    </View>
  )
}

export default DatePickerPrac

const styles = StyleSheet.create({})