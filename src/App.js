import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Menu from './components/Menu/Menu';

import routes from './routes';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="container">
          <div className="row">
          <Switch>
            {
              routes.length > 0 && routes.map((route, index) => 
                <Route key={index} exact={route.exact} path={route.path} component={route.main} />)
            }
          </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
