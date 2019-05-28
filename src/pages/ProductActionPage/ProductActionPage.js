import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';

class ProductActionPage extends React.Component {
  state = {
    id: '',
    name: '',
    price: 0,
    status: false
  }

  componentDidMount() {
    const { match } = this.props;
    if(match) {
      this.props.getProduct(match.params.id);
      const { id, name, price, status } = this.props.productEditing;
      this.setState({
        id,
        name,
        price,
        status
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { id, name, price, status } = this.props.productEditing;
    if(prevProps.productEditing.id !== id) {
      this.setState({
        id,
        name,
        price,
        status
      })
    }
  }

  onChange = e => {
    let { name, value, type, checked } = e.target;
    value = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: value
    })
  }

  onSave = e => {
    e.preventDefault();
    const { history } = this.props;
    const { id } = this.state;
    if (id) {
      this.props.updateProduct(this.state);
    } else {
      this.props.addProduct(this.state);
    }
    history.goBack();
  }

  render() {
    const { name, price, status } = this.state;
    return (
      <div className="col-md-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="form-control" name="name" onChange={this.onChange} value={name} />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" className="form-control" name="price" onChange={this.onChange} value={price} />
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox" className="form-check-input" name="status" checked={status} onChange={this.onChange} />
              In Stock
            </label>
          </div>
          <Link to="/product-list" className="btn btn-danger">Back</Link> {' '}
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    productEditing: state.productEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addProduct: product => dispatch(actAddProductRequest(product)),
    getProduct: id => dispatch(actGetProductRequest(id)),
    updateProduct: data => dispatch(actUpdateProductRequest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);