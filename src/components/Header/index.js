import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MenuIcon from 'react-native-vector-icons/Ionicons';
import ShoppingCartIcon from 'react-native-vector-icons/FontAwesome';
import {colors} from './../../colors';
import {Text} from './../Text';
import {Layout} from './../Layout';

export const Header = ({title, iconName = 'menu', orderAmount}) => {
  const {container, shopping__cart} = styles;
  return (
    <Layout style={container}>
      <TouchableOpacity>
        <MenuIcon name={iconName} size={25} color={colors.border} />
      </TouchableOpacity>
      <View>
        <Text title={title} h18 />
      </View>
      <TouchableOpacity>
        {orderAmount ? (
          <View style={shopping__cart}>
            <Text h10 title={orderAmount} white bold />
          </View>
        ) : (
          <View />
        )}
        <ShoppingCartIcon
          name="shopping-cart"
          size={25}
          color={colors.border}
        />
      </TouchableOpacity>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.header,
    alignItems: 'center',
    padding: 20,
  },
  shopping__cart: {
    position: 'absolute',
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
    borderRadius: 100,
    top: -10,
    left: 10,
    zIndex: 999,
  },
});
