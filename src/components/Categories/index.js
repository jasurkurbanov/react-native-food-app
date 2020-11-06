import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from '../Text';
import {colors} from '../../colors';
import {W} from './../../constants';
import {useNavigation} from '@react-navigation/native';
export const Categories = ({
  cuisineName,
  cuisineDesc,
  cuisineImg,
  routeName,
  data,
}) => {
  const navigation = useNavigation();
  const onNavigate = () => navigation.navigate(routeName, {data});
  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <View style={styles.container2}>
        <Image
          source={{uri: cuisineImg}}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textBox}>
        <Text title={cuisineName} h20 bold height={40} />
        <Text title={cuisineDesc} h14 lines={2} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: W - 30,
    alignSelf: 'center',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderColor: colors.borderPrimary,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    elevation: 8,
    marginTop: 20,
  },
  container2: {
    width: '30%',
  },
  img: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  textBox: {
    width: '65%',
    justifyContent: 'center',
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
  },
});
