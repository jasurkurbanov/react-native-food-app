import React, {memo} from 'react';
import {Text as MyText, StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from './../../colors';

const Text = memo(
  ({
    h10,
    h12,
    h14,
    h16,
    h18,
    h24,
    h30,
    height = 20,
    title = 'Hello',
    bold = false,
    medium = false,
    regular = false,
    italic = false,
    thin = false,
    white = false,
    gray = false,
    primary = false,
    upper = false,
    center = false,
    lines,
    style,
    ...otherProps
  }) => {
    const {
      h10__style,
      h12__style,
      h14__style,
      h16__style,
      h18__style,
      h24__style,
      h30__style,
    } = styles;
    return (
      <MyText
        numberOfLines={lines || 0}
        ellipsizeMode={'tail'}
        {...otherProps}
        style={[
          {lineHeight: height},
          {fontFamily: 'Poppins-Regular'}, //default font family
          h10 && StyleSheet.flatten(h10__style),
          h12 && StyleSheet.flatten(h12__style),
          h14 && StyleSheet.flatten(h14__style),
          h16 && StyleSheet.flatten(h16__style),
          h18 && StyleSheet.flatten(h18__style),
          h24 && StyleSheet.flatten(h24__style),
          h30 && StyleSheet.flatten(h30__style),
          bold && {fontFamily: 'Poppins-Bold'},
          medium && {fontFamily: 'Poppins-Medium'},
          regular && {fontFamily: 'Poppins-Regular'},
          italic && {fontFamily: 'Poppins-Italic'},
          thin && {fontFamily: 'Poppins-Thin'},
          white && {color: colors.white},
          primary && {color: colors.primary},
          gray && {color: colors.border},
          upper && {textTransform: 'uppercase'},
          center && {textAlign: 'center'},
          style,
        ]}>
        {title}
      </MyText>
    );
  },
);

export {Text};

const styles = ScaledSheet.create({
  h10__style: {
    fontSize: '10@ms',
  },
  h12__style: {
    fontSize: '12@ms',
  },
  h14__style: {
    fontSize: '14@ms',
  },
  h16__style: {
    fontSize: '16@ms',
  },
  h18__style: {
    fontSize: '18@ms',
  },
  h24__style: {
    fontSize: '24@ms',
  },
  h30__style: {
    fontSize: '30@ms',
  },
});
