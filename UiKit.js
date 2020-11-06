import React from 'react';
import {StyleSheet, View} from 'react-native';
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
import {icons, data} from './src/constants';
const UiKit = () => {
  return (
    <View>
      <Text title="Texts" h30 center height={40} bold primary />
      <View style={{alignItems: 'center'}}>
        <Text title="Example 12" h12 height={30} />
        <Text title="Example 12" h12 bold height={30} />
        <Text title="Example 14" h14 height={30} />
        <Text title="Example 14" h14 bold height={30} />
        <Text title="Example 16" h16 bold height={30} />
        <Text title="Example 16" h16 height={30} />
        <Text title="Example 18" h18 height={40} />
        <Text title="Example 18" h18 bold height={40} />
        <Text title="Example 24" h24 height={40} />
        <Text title="Example 30" h30 bold height={40} />
        <Text title="Example 30 Regular" h30 regular height={40} />
        <Text title="Example 30 Medium" h30 medium height={40} />
        <Text title="Example 30 Thin" h30 thin height={40} />
        <Text title="Example 30 Bold" h30 bold height={40} />
        <Text title="Example 30 Uppercase" h30 upper height={40} />
        <Text title="Example 30 Italic" h30 italic height={40} />

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
              <Text title="Input" h30 center height={40} bold primary />
              <Space size={15} />
              <Input
                iconName={icons.phone}
                name="position"
                onChangeText={handleChange('position')}
                onBlur={() => setFieldTouched('position')}
                placeholder="Phone/ Email"
                touched={touched}
                errors={errors}
              />
              {/* <Input
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
            /> */}
            </>
          )}
        </Formik>
        <Space size={15} />
        <Text title="Buttons" h30 center height={40} bold primary />
        <Space size={15} />
        <Button title="Login" type="secondary" />
        <Space />
        <Button title="Get Started!" type="primary" />
        <Space />
        <Button title="Register" type="default" />
        <Space />
        <Text title="Text Hr" h30 center height={40} bold primary />
        <Space size={15} />
        <TextHr title="Or Register With" />
        <Space />
        <Text title="Divider" h30 center height={40} bold primary />
        <Space size={15} />
        <Divider />

        <Text title="Categories" h30 center height={40} bold primary />
        <Space size={15} />
        <Categories
          foodName={data.foodName}
          foodDesc={data.foodDesc}
          foodImg={data.foodImg}
        />
        <Space />
        <Text title="Food Banner" h30 center height={40} bold primary />
        <Space size={15} />
        <FoodBanner imgUrl={data.foodImg} text={data.foodDesc} />
        <Space />
        <Text title="Food Card Details" h30 center height={40} bold primary />
        <Space size={15} />
        <FoodCard
          foodImg={data.foodImg}
          foodName={data.foodName}
          foodDesc={data.foodDesc}
          foodPrice={data.foodPrice}
          likesCount={data.foodLiked}
        />

        <Text title="Order Cart" h30 center height={40} bold primary />
        <OrderCart
          foodImg={data.foodImg}
          foodName={data.foodName}
          foodDesc={data.foodDesc}
          foodPrice={data.foodPrice}
          likesCount={data.foodLiked}
        />
        <Space size={15} />
        <Text title="UI Methodology" h24 center height={40} bold primary />
        <Space size={15} />
        <Text title="Atomic Design Methodology" h30 center height={40} gray />
        <Space />
        <Text title="Mobile App by:" h24 center height={40} bold primary />
        <Text title="Jasur Kurbanov" h30 center height={40} black />
        <Space />
        <Text title="Design by:" h24 center height={40} bold primary />
        <Text title="devenderkumar18" h30 center height={40} black />
      </View>
    </View>
  );
};

export default UiKit;

const styles = StyleSheet.create({});
