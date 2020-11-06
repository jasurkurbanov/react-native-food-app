import React from 'react';
import {View, ScrollView} from 'react-native';
import {
  Avatar,
  Button,
  Text,
  Header,
  HeaderBack,
  TextHr,
  Space,
  Categories,
  MenuCard,
  FoodBanner,
  FoodCard,
  FoodCardDetails,
  NotificationCard,
  Input,
  OrderCart,
  Divider,
} from './src/components';
import {Formik} from 'formik';
import * as Yup from 'yup';
import faker from 'faker';
import {icons, data} from './src/constants';
const Main = () => {
  const _onPress = () => console.log('click');
  return (
    <ScrollView>
      <Space size={15} />
      <Text title="Food Card Details" h30 center height={40} bold primary />
      <FoodCardDetails
        foodImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80"
        foodPrice="79"
        foodDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
      />

      <Space size={15} />
      <Text title="Notification Card" h30 center height={40} bold primary />
      <Space size={15} />
      <NotificationCard imgUrl={data.foodImg} messageText={data.foodDesc} />
      <Text title="Header" h30 center height={40} bold primary />
      <Space size={15} />
      <Header title="Main" />
    </ScrollView>
  );
};

export default Main;

/*

 <OrderCart
        foodImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80"
        foodName="Butter Chicken"
        foodDesc="Fresh fruits and vegetables"
        foodPrice="99"
        likesCount="314"
      />*/
