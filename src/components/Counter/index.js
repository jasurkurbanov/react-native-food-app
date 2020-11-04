import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {Text} from './../Text';
import {W} from './../../constants';
import {colors} from './../../colors';
export const Counter = ({onAdd, onSub, count = 'Hello'}) => {
  const {counter, counter__button, counter__text} = styles;
  return (
    <View style={counter}>
      <Pressable style={counter__button}>
        <Text title={'-'} h14 gray bold />
      </Pressable>
      <View style={counter__text}>
        <Text title={'2'} gray />
      </View>
      <Pressable style={counter__button}>
        <Text title={'+'} h14 gray bold />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    width: W / 3.5,
    flexDirection: 'row',
    alignItems: 'center',

    height: 30,
    justifyContent: 'space-between',
  },
  counter__button: {
    width: '30%',
    height: '100%',
    backgroundColor: colors.borderPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter__text: {
    width: '40%',
    height: '100%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.borderPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
  <View style={styles.counter__button}>
        <Text title="-" h18 gray bold />
      </View>
      <View style={styles.counter__text}>
        <Text title={count} h14 />
      </View>
      <View style={styles.counter__button}>
        <Text title="+" h18 gray bold />
      </View>*/
