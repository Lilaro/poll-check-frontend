import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import ReactMapGL, {Marker} from 'react-map-gl'
import React, {Component} from 'react'
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'
import ChatContainer from './containers/ChatContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

export class App extends Component {

  state = {
    token: null,
    userId: null,
    email: null,
    name: null,
    sites: [],
    messages: [],
    channel: {},
  }

  componentDidMount() {
    fetch('http://localhost:3000/poll_sites')
    .then(resp => resp.json())
    .then(data => this.setState({
        sites: data
    }));
    this.fetchChannels() 
    this.fetchMessages() 
    this.fetchCurrentUser()  
}

fetchChannels = () => {
    fetch('http://localhost:3000/channels', {
    //   headers: {
    //     'Authorization': `Bearer ${this.props.token}`
    //   }
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
       channel: data[2]
      })
    })    
  }

  fetchMessages = () => {
    fetch('http://localhost:3000/messages')
    .then(resp => resp.json())
    .then(data => this.setState({
        messages: data
    }, () => console.log(this.state.messages)))
  }

   fetchCurrentUser = () => {
    fetch('http://localhost:3000/profile', {
      headers: {'Authorization': `Bearer ${localStorage.token}`}
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
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
    console.log(this.state.sites)
    console.log('messages', this.state.messages)
    console.log('channel', this.state.channel);
    
    
    
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken} />} />
          <Route path='/home' render={(props) => <MainContainer  {...props} 
            token={this.state.token}
            userId={this.state.userId}
            name={this.state.name}
            sites={this.state.sites}
            messages={this.state.messages}
            channel={this.state.channel} />}/>
          <Route path='/chat' render={(props) => <ChatContainer {...props}
            gotToken={this.gotToken}
            token={this.state.token}
            userId={this.state.userId}
            name={this.state.name}/>} />
          <Route exact path='/' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken} />} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App 