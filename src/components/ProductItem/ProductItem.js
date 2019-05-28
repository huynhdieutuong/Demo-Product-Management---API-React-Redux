import React from 'react';
import { Link } from 'react-router-dom';

export default class ProductItem extends React.Component {

  onDelete = id => {
    if (confirm('Are you sure?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }

  render() {
    const { product, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><span className={`badge badge-${product.status ? 'warning' : 'secondary'}`}>
          {product.status ? 'In Stock' : 'Out of Stock'}
        </span></td>
        <td>
          <Link to={`/product-list/${product.id}/edit`} className="btn btn-success">Edit</Link> {' '}
          <button type="button" className="btn btn-danger" onClick={() => this.onDelete(product.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}