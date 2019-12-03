import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import ReactMapGL, {Marker} from 'react-map-gl'
import React, {Component} from 'react'
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'
import ChatContainer from './containers/ChatContainer'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

export class App extends Component {

  state = {
    token: null,
    userId: null,
    email: null,
    name: null,
    sites: [],
    messages: [],
    newMessage: '',
    channel: {},
    siteClicked: false,
    selectedSite: {},
    currentUser: {}
  }

  setSelectedSite = (site) => {
    this.setState({
      siteClicked: !this.state.siteClicked,
      selectedSite: site
    })
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
      headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      currentUser: data
    }, () => console.log('current user', this.state.currentUser)
    ))
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    })
  }

  submitMessage = (e) => {
    e.preventDefault()
  
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
          content: this.state.newMessage,
          user_id: this.state.currentUser.id,
          poll_site_id: this.state.selectedSite.id,
          channel_id: this.state.channel.id
      })
      })
      .then(resp => resp.json())
      .then(data => this.setState({
        messages: [...this.state.messages, data],
        newMessage: ''
      }))
  }

  messageChange = (e) => {
    e.preventDefault()

    this.setState({
        newMessage: e.target.value
    }, () => console.log(this.state.newMessage)
    )
  }

  handleLogout = () => {
    localStorage.clear()

    this.setState({
      currentUser: {}
    })
  }

      
  gotToken = (token, userId, name) => {
    localStorage.token = token
    localStorage.userId = userId
    localStorage.name = name
    
    debugger
    
    // this.setState({
    //   token,
    //   userId,
    //   name
    // }, () => console.log('gotToken invoked', this.state.name))
  }

  render() {
    // console.log(this.state.name, this.state.currentUser.name)
    console.log('messages', this.state.messages)
    console.log('channel', this.state.channel);
    console.log('props', this.props);
    
  
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken}
            fetchCurrentUser={this.fetchCurrentUser} />} />
          <Route path='/home' render={(props) => <MainContainer  {...props} 
            token={this.state.token}
            userId={this.state.userId}
            name={this.state.name}
            sites={this.state.sites}
            messages={this.state.messages}
    
            // newMessage={this.state.newMessage}
            channel={this.state.channel}
            siteClicked={this.state.siteClicked}
            selectedSite={this.state.selectedSite}
            handleSiteClick={this.handleSiteClick}
            currentUser={this.state.currentUser}
            submitMessage={this.submitMessage} 
            setSelectedSite={this.setSelectedSite}
            // messageChange={this.messageChange}
            handleLogout={this.handleLogout}
            />}/>
          <Route path='/chat' render={(props) => <ChatContainer {...props}
            gotToken={this.gotToken}
            token={this.state.token}
            userId={this.state.userId}
            name={this.state.name}
            messages={this.state.messages}
            newMessage={this.state.newMessage}
            channel={this.state.channel}
            handleSiteClick={this.handleSiteClick}
            currentUser={this.state.currentUser}
            submitMessage={this.submitMessage} 
            messageChange={this.messageChange}
            siteClicked={this.state.siteClicked}
            selectedSite={this.state.selectedSite}/>} />
          <Route exact path='/' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken}
            fetchCurrentUser={this.fetchCurrentUser}/>} />
        </Switch>
      </BrowserRouter>
      </>
    )
  }
}

export default App 


  // handleSiteClick = (e, site) => {
  //   e.preventDefault()
  //   this.setState({
  //       selectedSite: site,
  //       siteClicked: !this.state.siteClicked
  //   }, () => console.log('site clicked', this.state.siteClicked)
  //   )
  //   debugger
  //   // this.props.history.push('/chat')
  // }