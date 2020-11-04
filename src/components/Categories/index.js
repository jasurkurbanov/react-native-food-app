import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Text} from '../Text';
import {colors} from '../../colors';

export const Categories = ({foodName, foodDesc, foodImg}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={{uri: foodImg}} style={styles.img} resizeMode="cover" />
      </View>
      <View style={styles.textBox}>
        <Text title={foodName} h24 bold />
        <Text title={foodDesc} h14 lines={2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: colors.borderPrimary,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    elevation: 4,
  },
  container2: {
    width: '35%',
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textBox: {
    width: '60%',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
  },
});
