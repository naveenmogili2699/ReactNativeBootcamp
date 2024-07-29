import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// A child component that accepts a memoized callback
const ChildComponent = React.memo(({ onPress }) => {
  console.log('Child component rendered');
  return <Button title="Press me" onPress={onPress} />;
});

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  // Memoize the callback function
  const memoizedCallback = useCallback(() => {
    console.log('Button pressed');
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Text style={styles.text}>Value: {value}</Text>
      <Button title="Change Value" onPress={() => setValue(value + 1)} />
      <ChildComponent onPress={memoizedCallback} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:5,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});

export default UseCallBack;
