import React, { useHistory } from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
};

handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    //1. axios call http://localhost:5000/api/login pass in username and password through the body

    axios.post('api/auth/login', this.state.credentials)
      .then(resp=> {
        //2. if the call is successful: save token in localStorage
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('role', resp.data.role);
        localStorage.setItem('username', resp.data.username);
        this.props.history.push('/protected');
      })
      .catch(err=> {
        //3. if the call is unsuccessful: console.log error
        console.log(err);
      })
  };

  render() {
    return (
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
    );
  }
}

export default Login;