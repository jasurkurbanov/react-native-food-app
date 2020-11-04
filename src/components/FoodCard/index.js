import React from 'react';
import {Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from './../Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from './../../colors';
import {W} from './../../constants';
export const FoodCard = ({
  foodImg,
  foodName,
  foodDesc,
  foodPrice,
  likesCount,
}) => {
  const {
    container,
    box1,
    box1__img,
    box2,
    box2__price,
    box2__title,
    box3,
    box3__button,
    box3__likes,
  } = styles;
  return (
    <View style={container}>
      <View style={box1}>
        <Image source={{uri: foodImg}} style={box1__img} resizeMode="cover" />
      </View>
      <View style={box2}>
        <View style={box2__title}>
          <Text title={foodName} h18 bold />
          <Text title={foodDesc} h12 lines={1} />
        </View>
        <Text title={`$ ${foodPrice}`} h18 primary bold style={box2__price} />
      </View>
      <View style={box3}>
        <TouchableOpacity style={box3__button}>
          <Text title=" + Add" h14 primary upper />
        </TouchableOpacity>
        <View style={box3__likes}>
          <Icon name="heart" size={20} color={colors.border} />
          <Text title={likesCount} h16 gray />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: W - 50,
    alignSelf: 'center',
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
  },
  box1: {
    width: '25%',
  },
  box1__img: {
    width: '100%',
    height: '100%',
  },
  box2: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 6,
  },
  box2__title: {height: '70%'},
  box2__price: {height: '30%'},
  box3: {
    width: '18%',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  box3__button: {
    borderColor: colors.primary,
    borderWidth: 2,
    paddingVertical: 5,
    borderRadius: 5,
  },
  box3__likes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
});
