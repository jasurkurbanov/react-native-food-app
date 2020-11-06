import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {Header, Space, Categories, Background} from './../../components';
import {data} from './../../constants';
import {categories} from './../../data';
const Menu = () => {
  return (
    <Background>
      <Header title="Menu" orderAmount={2} />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <Space />}
        data={categories}
        renderItem={({item}) => (
          <Categories
            cuisineName={item.name}
            cuisineDesc={item.desc}
            cuisineImg={item.img}
            routeName={'MenuItem'}
            data={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </Background>
  );
};

export default Menu;

const styles = StyleSheet.create({});
