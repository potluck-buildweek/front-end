import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            {(role === 'admin' && isLoggedIn) && <Link to="/logout">Admin</Link> }
          </li>
          <li>
            {isLoggedIn && <div>
                <Link to="/protected">Protected Page</Link>
                <p>Welcome to the page: {username}</p>
              </div>
            }
          </li>
        </ul>
        <Switch>
          {/* after login authentication  the user can changed dates and other fields in the organizer*/}
          <PrivateRoute exact path="/protected" component={"Organizer"} />          
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}


export default App;
