import React from 'react';
import ProductList from '../../components/ProductList/ProductList';
import ProductItem from '../../components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from '../../actions/index';

class ProductListPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  onDelete = id => {
    this.props.deleteProduct(id);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="col-md-12">
        <Link to="/product-list/add" className="btn btn-primary my-4">Add Product</Link>
        <ProductList>
          { products.length > 0 && products.map((product, index) => 
              <ProductItem 
                key={index} 
                product={product} 
                index={index} 
                onDelete={this.onDelete}
              /> )}
        </ProductList>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => dispatch(actFetchProductsRequest()),
    deleteProduct: id => dispatch(actDeleteProductRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);