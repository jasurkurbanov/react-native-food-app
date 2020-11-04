import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../colors';
import {W} from '../../constants';
import {Text} from '../Text';

const styles = ScaledSheet.create({
  primary__style: {
    width: W - 50,
    padding: '10@s',
    borderRadius: '5@s',
    borderWidth: '1@s',
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    alignSelf: 'center',
  },

  secondary__style: {
    width: W - 50,
    padding: '10@s',
    borderRadius: '5@s',
    borderWidth: '1@s',
    borderColor: colors.primary,
    backgroundColor: colors.white,
    alignSelf: 'center',
  },

  default__style: {
    width: W,
    borderColor: colors.primary,
    padding: '10@s',
    backgroundColor: colors.primary,
  },

  primary__text: {
    color: colors.white,
  },
  secondary__text: {
    color: colors.primary,
  },
  default__text: {
    color: colors.white,
  },
});

export const Button = ({type = 'default', title, style}) => {
  const {
    default__style,
    primary__style,
    secondary__style,
    default__text,
    primary__text,
    secondary__text,
  } = styles;

  const buttonContainer = (size) =>
    ({
      primary: primary__style,
      secondary: secondary__style,
      default: default__style,
    }[size]);

  const buttonText = (size) =>
    ({
      primary: primary__text,
      secondary: secondary__text,
      default: default__text,
    }[size]);

  return (
    <View style={[buttonContainer(type), style]}>
      <Text h14 center title={title} style={buttonText(type)} />
    </View>
  );
};
