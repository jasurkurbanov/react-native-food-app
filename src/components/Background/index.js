import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../colors';

export const Background = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {backgroundColor: colors.white, flex: 1},
});
