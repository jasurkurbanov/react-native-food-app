import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {Layout} from './../Layout';
import {Text} from './../Text';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from './../../colors';
import {W} from './../../constants';
export const FoodCardDetails = ({foodImg, foodPrice, foodDesc}) => {
  const {container, card__header, card__image, card__content} = styles;
  return (
    <View style={container}>
      <Layout style={card__header}>
        <Icon name="heart-o" size={20} color={colors.border} />
        <Text title={`$ ${foodPrice}`} h18 primary bold />
      </Layout>
      <View>
        <Image source={{uri: foodImg}} resizeMode="cover" style={card__image} />
      </View>
      <View style={card__content}>
        <Text h14 gray center lines={5} height={25} title={foodDesc} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: W - 10,
    paddingTop: 10,
  },
  card__header: {
    paddingVertical: 5,
  },
  card__image: {width: '100%', height: 150},
  card__content: {padding: 20},
});
