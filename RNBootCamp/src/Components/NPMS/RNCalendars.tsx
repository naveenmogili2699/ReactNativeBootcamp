import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
//import {[Calendar](#calendar), [CalendarList](#calendarlist), [Agenda](#agenda)} from 'react-native-calendars';
import { Calendar, LocaleConfig } from 'react-native-calendars';


// LocaleConfig.locales['fr'] = {
//   monthNames: [
//     'Janvier',
//     'Février',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juillet',
//     'Août',
//     'Septembre',
//     'అక్టోబర్',
//     'Novembre',
//     'Décembre'
//   ],
//   monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'అక్టో', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
//   dayNames: ['ఆదివారం', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
//   dayNamesShort: ['ఆది', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
//   today: "ఆదివారం"
// }

// LocaleConfig.defaultLocale = 'fr';

const RNCalendars = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selected, setSelected] = useState('')
  const displayCalendar = () => {
    setIsVisible(!isVisible)
  }
  return (
    <View>
      <Text>Calendars</Text>
      <TouchableOpacity onPress={() => displayCalendar()}>
        <Text>Show  </Text>
      </TouchableOpacity>
      <Calendar
        style={styles.calstyle}
        theme={{
          backgroundColor: 'red',
          // calendarBackground: 'gray',
          textSectionTitleColor: 'blue',
          selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'blue',
          dayTextColor: 'black',
          textDisabledColor: '#d9e'
        }}
        // current = {'2098-10-24'}
        onDayPress={day => {
          setSelected(day.dateString);
          console.log(day)
        }}
        // const workout = {key: 'workout', color: 'green'};
        markingType={'period'}
        markedDates={{
          [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'red', selectedColor: 'green', selectedTextColor: 'black', },
          '2024-07-04': { selected: true, selectedColor:'gray', selectedTextColor: 'black',},
          '2024-07-22': {startingDay: true, color: 'green'},
          '2024-07-23': {color:'green'},
          '2024-07-26': {endingDay: true, color: 'green'},
        }}
        onMonthChange={(month)=>console.log("Month Changed",month)}
        // hideArrows={true}
        // renderArrow={direction => <Arrow />}
        // hideExtraDays={true}
        // disableMonthChange={true}
        // firstDay={1}
        // hideDayNames={true}
        // showWeekNumbers={true}
        // disableArrowLeft={true}
        // disableArrowRight={true}
        // enableSwipeMonths={true}
      />

    </View>
  )
}

export default RNCalendars;

const styles = StyleSheet.create({
  calstyle:{
    borderWidth: 1,
          borderColor: 'black',
          height: 350,
          borderRadius:10,
  }
})