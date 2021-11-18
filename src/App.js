import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Logout from './components/Logout';
import GuestForm from './components/GuestForm';
import OrganizerForm from './components/OrganizerForm';
import Home from './components/Home';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');


  return (
    <Router>

      <div className="App">
          <nav>
            {!isLoggedIn && <Link to="/login">Login!</Link>}

            <Link to="/logout">Logout</Link>

            {(role === 'user' && isLoggedIn) && <Link to="/logout">User</Link> }
            {isLoggedIn &&
                <Link to="/protected">Home</Link> 
            }
          </nav>
          <Switch>
            {/* after login authentication  the user can changed dates and other fields in the organizer*/}
            <PrivateRoute exact path="/protected" component={"OrganizerForm"} />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        {isLoggedIn && <div>
                <h2>Welcome to the Potluck Planner: {username}</h2>
              </div>
          }
          <div className='wrapper'>
        {isLoggedIn && <div className='card'>
                <OrganizerForm />
              </div>
          }
        {isLoggedIn && <div className='card'>
                <GuestForm />
              </div>
          }
          </div>
      </div>
    </Router>
  );
}

export default App;