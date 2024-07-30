import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, multiply, selectCount,itemRed, selectItem} from '../ReduxToolKit/counterSlice';
import {deposit, totalBlc} from '../ReduxToolKit/balanceSlice';
import { View, Text, Button } from 'react-native';


const ReduxScreen = () => {
  const count = useSelector(selectCount);
  const item = useSelector(selectItem);
  const dispatch = useDispatch();
  const blc = useSelector(totalBlc)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Redux Example</Text>
      <Text>Count: {count}</Text>
      <Text>Count: {item}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Multiply" onPress={() => dispatch(multiply())} />
      <Button title="Item" onPress={() => dispatch(itemRed('Kirr'))} />
      <Text>Balance: {blc}</Text>
      <Button title="Deposit      " onPress={() => dispatch(deposit())} />
        <Text>hello Kiran</Text>
    </View>
  );
};

export default ReduxScreen;