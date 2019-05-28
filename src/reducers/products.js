import * as Types from '../constants/ActionTypes';
const initialState = [];

const products = (state = initialState, action) => {
  const { id, products, product, data } = action;
  let index = -1;
  switch(action.type) {
    case Types.FETCH_PRODUCTS:
      state = products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = state.findIndex(product => product.id === id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_PRODUCT:
      state.push(product);
      return [...state];
    case Types.UPDATE_PRODUCT:
      index = state.findIndex(product => product.id === data.id);
      state[index] = data;
      return [...state];
    default: return [...state];
  }
}

export default products;