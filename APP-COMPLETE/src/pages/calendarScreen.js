import React, { useState } from "react";
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import { View, Text} from 'react-native';

const calendarScreen = ({navigation}) => {
  const [markedDates, setMarkedDates] = useState({
    '2021-01-20': {textColor: 'green'},
    '2021-01-22': {startingDay: true, color: 'green'},
    '2021-01-23': {selected: true, endingDay: true, color: 'green', textColor: 'gray'},
    '2021-01-04': {disabled: true, startingDay: true, color: 'green', endingDay: true}
  })

  const handleDayPress = (day) => {
    setMarkedDates({
      [day.dateString]: {
        startingDay: true,color: 'green'
      },
      [moment(day.dateString).add(1, 'days').format('YYYY-MM-DD')]: {
        color: 'green'
      },
      [moment(day.dateString).add(2, 'days').format('YYYY-MM-DD')]: {
        color: 'green'
      },
      [moment(day.dateString).add(3, 'days').format('YYYY-MM-DD')]: {
        endingDay: true,color: 'green'
      }
    })
  }

  return (
    <View>
    <Calendar
      markedDates={markedDates}
      markingType={'period'}
      onDayPress={handleDayPress}
    />

    </View>
  )
}

export default calendarScreen;