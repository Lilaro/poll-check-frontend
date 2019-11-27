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
    email: null,
    name: null
  }

  gotToken = (token, userId, name) => {
    localStorage.token = token
    localStorage.userId = userId
    localStorage.name = name

    this.setState({
      token,
      userId,
      name
    }, () => console.log('gotToken invoked', this.state.name))
  }
      
  render() {
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken} />}/>
          <Route path='/home' render={(props) => <MainContainer  {...props} 
            token={this.state.token} userId={this.state.userId}
            name={this.state.name}/> } />
          <Route exact path='/' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken} />} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App 