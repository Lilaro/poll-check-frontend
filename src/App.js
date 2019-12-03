import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
// import ReactMapGL, {Marker} from 'react-map-gl'
import React, {Component} from 'react'
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'
import ChatContainer from './containers/ChatContainer'
import Profile from './containers/Profile'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

export class App extends Component {

  state = {
    sites: [],
    messages: [],
    newMessage: '',
    channel: {},
    siteClicked: false,
    selectedSite: {},
    currentUser: {},
    editName: '',
    editEmail: '',
    editPassword: '',
    errors: []
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

  handleEditChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state.editName))
  }
  
  handleEditSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users/${this.state.currentUser.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      },
      body: JSON.stringify({
        name: this.state.editName,
        email: this.state.editEmail,
        password: this.state.editPassword
      })
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      if (data.errors) {
        this.setState({
          errors: data.errors
        })
      } 
    })
    this.fetchCurrentUser()
  }
  
  render() {
    console.log(this.state.currentUser)
    console.log('messages', this.state.messages)
    console.log('channel', this.state.channel); 
    
    return (
      <>
      <BrowserRouter>
        <Switch>
          <Route path='/login' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken}
            fetchCurrentUser={this.fetchCurrentUser} />} />
          <Route path='/home' render={(props) => <MainContainer  {...props} 
            sites={this.state.sites}
            messages={this.state.messages}
            channel={this.state.channel}
            siteClicked={this.state.siteClicked}
            selectedSite={this.state.selectedSite}
            handleSiteClick={this.handleSiteClick}
            currentUser={this.state.currentUser}
            submitMessage={this.submitMessage} 
            setSelectedSite={this.setSelectedSite}
            handleLogout={this.handleLogout}
            handleProfileClick={this.handleProfileClick}
            />}/>
          <Route path='/chat' render={(props) => <ChatContainer {...props}
            messages={this.state.messages}
            newMessage={this.state.newMessage}
            channel={this.state.channel}
            handleSiteClick={this.handleSiteClick}
            currentUser={this.state.currentUser}
            submitMessage={this.submitMessage} 
            messageChange={this.messageChange}
            siteClicked={this.state.siteClicked}
            selectedSite={this.state.selectedSite}/>} />
          <Route path='/profile' render={(props) => <Profile {...props}
            currentUser={this.state.currentUser}
            editName={this.state.editName}
            editEmail={this.state.editEmail}
            editPassword={this.state.editPassword}
            handleEditChange={this.handleEditChange}
            handleEditSubmit={this.handleEditSubmit}/>} />
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


      // gotToken = (token, userId, name) => {
      //   localStorage.token = token
      //   localStorage.userId = userId
      //   localStorage.name = name
        
      //   debugger
        
        // this.setState({
        //   token,
        //   userId,
        //   name
        // }, () => console.log('gotToken invoked', this.state.name))
      // }