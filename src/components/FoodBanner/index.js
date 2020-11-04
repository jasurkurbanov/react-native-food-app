import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {Text} from './../Text';

export const FoodBanner = ({imgUrl, text}) => {
  return (
    <ImageBackground source={{uri: imgUrl}} style={styles.imgContainer}>
      <View style={styles.textContainer}>
        <Text lines={1} white center bold h16 title={text} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgContainer: {width: '100%', height: 180, justifyContent: 'flex-end'},
  textContainer: {
    backgroundColor: 'rgba(52,52,52,0.6)',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
