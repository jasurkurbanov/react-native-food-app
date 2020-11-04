import React from 'react';
import {Image} from 'react-native';

export const Avatar = ({imgUrl, size = 80}) => (
  <Image
    source={{uri: imgUrl}}
    style={{width: size, height: size, borderRadius: size}}
  />
);
