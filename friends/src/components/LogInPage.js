import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions'



class LogInPage extends React.Component {
  constructor() {
    super()
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  };

handleChange = e => {
  this.setState({
    credentials: {
      ...this.state.credentials,
      [e.target.name]: e.target.value
    }
  })
}

login = e => {
  e.preventDefault();
  this.props.login(this.state.credentials)
    .then(() => this.props.history.push('/protected'))
}


  render() {
    return (
      <div className='login-card'>
        <form>
          <input
            type='text'
            name='username'
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
      
      </div>
    )
  }
}

const stateToProps = state => {
  return {
    fetchingFriend: state.fetchingFriend,
    error: state.error
  }
}

export default connect(stateToProps, { login })(LogInPage)

