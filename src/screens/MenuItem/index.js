import React from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {
  Header,
  FoodBanner,
  FoodCard,
  Space,
  FoodCardDetails,
} from './../../components';

const MenuItem = ({route}) => {
  const {data} = route.params;
  return (
    <View>
      <Header title="Menu" orderAmount={2} />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => (
          <FoodBanner imgUrl={data.banner} text={data.desc} />
        )}
        ListFooterComponent={() => <Space size={100} />}
        data={data.recipes}
        renderItem={({item}) => (
          <FoodCard
            foodImg={item.img}
            foodName={item.name}
            foodPrice={item.price}
            foodDesc={item.desc}
            likesCount={item.likes}
            routeName={'MenuItem'}
            data={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});
