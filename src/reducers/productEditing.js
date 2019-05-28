import * as Types from '../constants/ActionTypes';

const initialState = {};

const productEditing = (state = initialState, action) => {
  const { type, product } = action;
  switch (type) {
    case Types.EDIT_PRODUCT:
      return product;
    default: return state;
  }
}

export default productEditing;