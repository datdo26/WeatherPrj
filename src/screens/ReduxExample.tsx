import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {decremented, incremented} from '../store';
import {useDispatch, useSelector} from 'react-redux';

const ReduxExample = () => {
  //@ts-ignore
  const value = useSelector(state => state.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => dispatch(incremented())}>
          <Text>Increase</Text>
        </TouchableOpacity>
        <Text>{value}</Text>
        <TouchableOpacity onPress={() => dispatch(decremented())}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReduxExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
