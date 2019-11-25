import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import ReactMapGL, {Marker} from 'react-map-gl'
import React, {Component} from 'react'
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'

export class App extends Component {

  state = {
    token: null,
    userId: null,
    email: null
  }

  gotToken = (token, userId, email) => {
    localStorage.token = token
    localStorage.userId = userId
    // localStorage.email = email

    this.setState({
      token,
      userId,
      // email
    })
  }
      
  render() {
    return (
      <>
      {this.state.token ?
        
        <MainContainer token={this.state.token}
          userId={this.state.userId}>
          Main Container
        </MainContainer>
         :
        <LoginContainer gotToken={this.gotToken}>
          Login
        </LoginContainer>
       
      }
      </>
    )
  }
}

export default App 