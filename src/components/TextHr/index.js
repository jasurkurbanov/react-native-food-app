import React from 'react';
import {View} from 'react-native';
import {Text} from './../Text';
import {W} from './../../constants';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from './../../colors';

export const TextHr = ({title}) => {
  const {container, line, text} = styles;
  return (
    <View style={container}>
      <View style={line} />
      <Text style={text} title={title} h14 gray center />
      <View style={line} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    width: W - 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  line: {width: W / 4, height: '1@s', backgroundColor: colors.border},
  text: {width: W / 3},
});
