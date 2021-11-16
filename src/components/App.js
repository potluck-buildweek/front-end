import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import Login from './Login';
import Logout from './Logout';
import GuestForm from './GuestForm'

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const isLoggedIn = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const username = localStorage.getItem('username');

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
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
        {isLoggedIn && <div>
                <p>Welcome to the page: {username}</p>
                <GuestForm submit={submit}/>
              </div>
            }
      </div>
    </Router>
  );
}

export default App;
