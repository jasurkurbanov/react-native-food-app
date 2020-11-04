import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {W} from './../../constants';
import {colors} from './../../colors';
import {ScaledSheet} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Input = ({
  iconName,
  name,
  value,
  errors,
  placeholder,
  onChangeText,
  onBlur,
  touched,
  secureTextEntry,
  keyboardType,
  multiline,
  numberOfLines,
  autoCapitalize,
}) => {
  const {input__container, input__style, errorStyle} = styles;

  return (
    <>
      <View style={input__container}>
        <Icon name={iconName} size={20} color={colors.border} />
        <TextInput
          style={input__style}
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
      {touched[name] && errors[name] ? (
        <Text style={errorStyle}>{errors[name]}</Text>
      ) : (
        <Text style={errorStyle}>{'  '}</Text>
      )}
    </>
  );
};

const styles = ScaledSheet.create({
  input__container: {
    alignSelf: 'center',
    width: W - 50,
    borderBottomWidth: '1@s',
    borderBottomColor: colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input__style: {
    width: W - 80,
    fontSize: '14@s',
    fontFamily: 'Poppins-Regular',
  },
  errorStyle: {
    fontSize: '14@s',
    color: 'red',
    paddingTop: 10,
    left: 5,
    fontFamily: 'Poppins-Regular',
  },
});
