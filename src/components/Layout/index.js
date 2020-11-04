import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Layout = ({children, style}) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {flexDirection: 'row', justifyContent: 'space-between'},
});
