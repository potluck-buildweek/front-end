import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import PrivateRoute from './PrivateRoute';

import Login from './Login';
import Logout from './Logout';
import GuestForm from './GuestForm'

const initialFormValues = {
  users: '',
  events: [],
}

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  axios.get('login').then().catch(); //for the backend, passthru to guest and organizer

  const submit=()=>{
    //wip
  }

  return (
    <Router>

      <div className="App">
          <nav>
            <Link to="/login">Already signed in? Login!</Link>

            <Link to="/logout">Logout</Link>

            {(role === 'admin' && isLoggedIn) && <Link to="/logout">Admin</Link> }
            {isLoggedIn &&
                <Link to="/protected">Home</Link> 
            }
          </nav>
        <Switch>
          {/* after login authentication  the user can changed dates and other fields in the organizer*/}
          <PrivateRoute exact path="/protected" component={"Organizer"} />
          {!isLoggedIn && <div className='login'><img src='https://media.istockphoto.com/photos/reality-check-ahead-picture-id689438716' />
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
          </div>}
        </Switch>
        {isLoggedIn && <div>
                <h2>Welcome to the page: {username}</h2>
              </div>
          }
          <div className='wrapper'>
        {isLoggedIn && <div className='card'>
                <GuestForm submit={submit}/>
              </div>
          }
        {isLoggedIn && <div className='card'>
                <GuestForm submit={submit}/>
              </div>
          }
          </div>
      </div>
    </Router>
  );
}

export default App;