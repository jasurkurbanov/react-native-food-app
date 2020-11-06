import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text} from './../Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../colors';
import {Counter} from './../Counter';
import {W} from './../../constants';

export const OrderCart = ({
  foodImg,
  foodName,
  foodDesc,
  foodPrice,
  likesCount,
}) => {
  const [count, setCount] = useState(0);
  const {container, box1, box1__img, box2, box3} = styles;
  return (
    <View style={container}>
      <View style={box1}>
        <Image source={{uri: foodImg}} style={box1__img} resizeMode="cover" />
      </View>
      <Pressable style={box2}>
        <Text title={foodName} h18 bold />
        <Counter title={foodDesc} h12 lines={1} count={count} />
      </Pressable>
      <Pressable style={box3}>
        <Text title={`$ ${25}`} h24 bold primary height={60} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: W - 50,
    flexDirection: 'row',
    height: 80,
    alignSelf: 'center',
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
    paddingVertical: 10,
  },
  box3: {
    width: '18%',
    height: '100%',
    justifyContent: 'center',
  },
});
