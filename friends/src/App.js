import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
           <Route path='/login' component={LogInPage} />
          <PrivateRoute exact path='/protected' component={FriendsList} />
          
        </div>
      </Router>
    );
  
}

export default App;
