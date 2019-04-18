import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LogInPage from './components/LogInPage';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';

import './App.css';

function App() {
  
    return (
      <BrowserRouter>
        <div className="App">
          
           <Route path='/login' component={LogInPage} />
          <PrivateRoute exact path='/protected' component={FriendsList} />
          
        </div>
      </BrowserRouter>
    );
  
}

export default App;
