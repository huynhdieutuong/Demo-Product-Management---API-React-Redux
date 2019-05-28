import { combineReducers } from 'redux';
import products from './products';
import productEditing from './productEditing';

const myReducers = combineReducers({
  products,
  productEditing
});

export default myReducers;