import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import ReactMapGL, {Marker} from 'react-map-gl'
import React, {Component} from 'react'
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export class App extends Component {

  state = {
    token: null,
    userId: null,
    email: null
  }

  gotToken = (token, userId) => {
    localStorage.token = token
    localStorage.userId = userId

    this.setState({
      token,
      userId
    }, () => console.log('gotToken invoked', this.state.userId))
  }
      
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken} />}/>
          <Route path='/home' render={(props) => <MainContainer  {...props} 
            token={this.state.token} userId={this.state.userId}/> } />
          <Route exact path='/' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken} />} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App 
        //  <MainContainer token={this.state.token}
        //   userId={this.state.userId}>
        //   Main Container
        //   Main Container
        //   Main Container
        // </MainContainer>
         
        // <LoginContainer gotToken={this.gotToken}>
        //   Login
        // </LoginContainer>