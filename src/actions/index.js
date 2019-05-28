import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

// Fetch Products
export const actFetchProductsRequest = () => {
  return dispatch => {
    callApi('products', 'GET', null)
      .then(res => {
        dispatch(actFetchProducts(res.data));
      })
  }
}

export const actFetchProducts = products => {
  return {
    type: Types.FETCH_PRODUCTS,
    products
  }
}

// Delete Product
export const actDeleteProductRequest = id => {
  return dispatch => {
    callApi(`products/${id}`, 'DELETE', null)
      .then(res => {
        dispatch(actDeleteProduct(id));
      })
  }
}

export const actDeleteProduct = id => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

// Add Product
export const actAddProductRequest = product => {
  return dispatch => {
    callApi('products', 'POST', product)
      .then(res => {
        dispatch(actAddProduct(res.data));
      })
  }
}

export const actAddProduct = product => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

// Get Product Editing
export const actGetProductRequest = id => {
  return dispatch => {
    callApi(`products/${id}`, 'GET', null)
      .then(res => {
        dispatch(actGetProduct(res.data));
      })
  }
}

export const actGetProduct = product => {
  return {
    type: Types.EDIT_PRODUCT,
    product
  }
}

// Update Product Editing
export const actUpdateProductRequest = data => {
  return dispatch => {
    callApi(`products/${data.id}`, 'PUT', data)
      .then(res => {
        dispatch(actUpdateProduct(res.data));
      })
  }
}

export const actUpdateProduct = data => {
  return {
    type: Types.UPDATE_PRODUCT,
    data
  }
}