import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar} from './../Avatar';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from './../../colors';
import {Layout} from './../Layout';
import {Text} from './../Text';

export const NotificationCard = ({imgUrl, messageText}) => {
  const {container, avatar, message, read__more} = styles;

  return (
    <Layout style={container}>
      <View style={avatar}>
        <Avatar imgUrl={imgUrl} />
      </View>
      <View style={message}>
        <Text title={messageText} h16 center lines={2} />
      </View>
      <TouchableOpacity style={read__more}>
        <Icon name="arrow-forward-circle" size={30} color={colors.border} />
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', alignItems: 'center'},
  read__more: {width: '10%', alignItems: 'center'},
  avatar: {width: '25%'},
  message: {width: '55%'},
});
