import React from 'react';
import {StyleSheet, View} from 'react-native';
import {W} from './../../constants';
import {colors} from '../../colors';
export const Divider = () => (
  <View style={{width: W, height: 2, backgroundColor: colors.borderPrimary}} />
);

const styles = StyleSheet.create({});
