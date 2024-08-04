// MainComponent.js
import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const PersistScreen = () => {
  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{fontSize: 24}}>Counter:{counter}</Text>
      <Button title="Increment" onPress={() => dispatch({type: 'INCREMENT'})} />
      <Button title="Decrement" onPress={() => dispatch({type: 'DECREMENT'})} />
    </View>
  );
};

export default PersistScreen;
