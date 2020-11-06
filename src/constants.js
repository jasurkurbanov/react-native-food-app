import {Dimensions} from 'react-native';

export const {width: W, height: H} = Dimensions.get('window');

export const icons = {
  phone: 'cellphone',
  email: 'email',
  password: 'key-variant',
  back: 'arrow-back',
  menu: 'menu',
  cart: 'shopping-cart',
};

export const data = {
  foodName: 'Indian Food',
  foodDesc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  foodImg:
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&w=1000&q=80',
  foodPrice: 69,
  foodLiked: 123,
};
