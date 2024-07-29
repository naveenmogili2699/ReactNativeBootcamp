import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Simulate an expensive calculation function
const expensiveCalculation = (num) => {
  console.log('Performing expensive calculation...');
  //for (let i = 0; i < 100; i++) {} // Simulate a heavy computation
  return num * 2;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // Memoize the result of the expensive calculation
  const memoizedValue = useMemo(() => expensiveCalculation(input), [input]);
  //const memoizedValue = expensiveCalculation(input)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
      <Text style={styles.text}>Input: {input}</Text>
      <Button title="Change Input" onPress={() => setInput(input + 1)} />
      <Text style={styles.text}>Memoized Value: {memoizedValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default UseMemo;
