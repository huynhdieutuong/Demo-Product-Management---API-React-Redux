import React from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
  {
    to: '/',
    name: 'Home',
    exact: true
  },
  {
    to: '/product-list',
    name: 'Product List',
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) =>
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) =>
      <Link 
        to={to} 
        className={`nav-item nav-link ${match ? 'active' : ''}`}>
        {label}
      </Link>}
  />;

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          {
            menus.length > 0 && menus.map((menu, index) =>
              <MenuLink 
                key={index} 
                label={menu.name} 
                to={menu.to} 
                activeOnlyWhenExact={menu.exact} 
              />)
          }
        </div>
      </nav>
    )
  }
}