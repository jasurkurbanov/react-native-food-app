import React from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Button,
  Text,
  Header,
  HeaderBack,
  TextHr,
  Space,
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
import {icons} from './src/constants';
const Main = () => {
  const _onPress = () => console.log('click');
  return (
    <View>
      <Formik
        initialValues={{
          position: 'React Native Developer',
          rate: 5000,
          description: faker.lorem.paragraph(),
        }}
        onSubmit={(values) => _onPress(values)}
        validationSchema={Yup.object().shape({
          position: Yup.string().min(3).required(),
          rate: Yup.number().min(3).required(),
          description: Yup.string().min(3).required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <>
            <Input
              iconName={icons.phone}
              name="position"
              onChangeText={handleChange('position')}
              onBlur={() => setFieldTouched('position')}
              placeholder="Phone/ Email"
              touched={touched}
              errors={errors}
            />
            <Input
              iconName={icons.email}
              name="rate"
              keyboardType="numeric"
              onChangeText={handleChange('rate')}
              onBlur={() => setFieldTouched('rate')}
              placeholder="Rate"
              touched={touched}
              errors={errors}
            />
            <Input
              iconName={icons.password}
              name="description"
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              placeholder="Description"
              touched={touched}
              errors={errors}
            />
          </>
        )}
      </Formik>

      <OrderCart
        foodImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80"
        foodName="Butter Chicken"
        foodDesc="Fresh fruits and vegetables"
        foodPrice="99"
        likesCount="314"
      />
      <Space size={15} />
      <Divider />
    </View>
  );
};

export default Main;

/* <Text title="Text h12" h12 />
      <Text title="Text h14" h14 />
      <Text title="Text h16" h16 />
      <Text title="Text h18" h18 />
      <Text title="Text h24" h24 />
      <Text title="Text h30" h30 bold />
      <Text title="Text h30 Regular" h30 regular />
      <Text title="Text h30 Medium" h30 medium />
      <Text title="Text h30 Thin" h30 thin />
      <Text title="Text h30 Bold" h30 bold />
      <Text title="Text h30 Uppercase" h30 upper />
      <Text title="Text h30 Italic" h30 italic />*/

/*
        <Button title="Get Started!" type="primary" />
      <Space />
      <Button title="Login" type="secondary" />
      <Space />
      <Button title="Register" type="default" />*/

/*

       <TextHr title="Or Register With" />
      <Space />
      <Button type="primary" />
      <Space />
      <TextHr title="Or Login With" />

      */

/*
        <Categories
        foodName="Indian Food"
        foodDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        foodImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80"
      />*/

/*

       <FoodBanner
        imgUrl={
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80'
        }
        text="Fresh fruits and vegetables"
      />
      */
/*
   <FoodCard
        foodImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80"
        foodName="Butter Chicken"
        foodDesc="Fresh fruits and vegetables"
        foodPrice="99"
        likesCount="314"
      />*/

/*
         <FoodCardDetails
        foodImg="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80"
        foodPrice="79"
        foodDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled."
      />
      */

/*
         <Space />
      <Header title="Main" />
      <Space />
      <Header iconName="arrow-back" title="Omlette" />*/

/*
      <NotificationCard
        imgUrl={
          'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80'
        }
        messageText={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since'
        }
      />
*/
