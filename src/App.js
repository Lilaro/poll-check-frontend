import './App.css';
import React, {Component} from 'react'
import LoginContainer from './containers/LoginContainer'
import MainContainer from './containers/MainContainer'
import ChatContainer from './containers/ChatContainer'
import Profile from './containers/Profile'
import { Route, Switch } from 'react-router-dom'

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
    errors: [],
  }
  

  setSelectedSite = (site) => {
    this.setState({
      siteClicked: !this.state.siteClicked,
        selectedSite: site,
        messages: site.messages
      })
    }

  componentDidMount() {
    fetch('http://localhost:3000/poll_sites')
    .then(resp => resp.json())
    .then(data => this.setState({
        sites: data
    }));
    this.fetchChannels() 
    this.fetchCurrentUser()  
    this.populateUserData()
  }

  populateUserData = () => {
    if (this.state.currentUser) {
      this.setState({
        editName: this.state.currentUser.name,
        editEmail: this.state.currentUser.email,
        editPassword: this.state.currentUser.password
      })
    }
  }

  fetchChannels = () => {
    fetch('http://localhost:3000/channels', {
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
      channel: data[2]
      })
    })    
  }

   fetchCurrentUser = () => {
    fetch('http://localhost:3000/profile', {
      headers: {'Authorization': `Bearer ${localStorage.getItem("token")}`}
    })
    .then(resp => resp.json())
    .then(data => this.setState({
      currentUser: data,
    }, () => console.log('current user', this.state.currentUser)
    ))
  }

  submitMessage = (e) => {
    e.preventDefault()
    e.persist()
    
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
          channel_id: this.state.channel.id,
          username: this.state.currentUser.name
      })
      })
      .then(resp => resp.json())
      .then(data => 
        this.setState({
        messages: [...this.state.messages, data],
        newMessage: ''
      })
      )
      e.target.reset()
  }

  messageChange = (e) => {
    e.preventDefault()

    this.setState({
        newMessage: e.target.value
    }
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
    })
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
    window.location.reload()
  }
  
  maintainSelectedSite = () => {
    fetch(`http://localhost:3000/poll_sites/${this.props.match.path.split('/')[2]}`)
    .then(resp => resp.json())
    .then(data => this.setState({
        selectedSite: data
    })
    )
  }

  render() {
    
    return (
      <>
        <Switch>
          <Route exact path='/' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken}
            fetchCurrentUser={this.fetchCurrentUser} />} />
          <Route exact path='/home' render={(props) => <MainContainer  {...props} 
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
            profileClicked={this.profileClicked}
            />}/>
          <Route exact path={`/chat/${this.state.selectedSite.id}`} render={(props) => <ChatContainer {...props}
            messages={this.state.messages}
            newMessage={this.state.newMessage}
            channel={this.state.channel}
            handleSiteClick={this.handleSiteClick}
            currentUser={this.state.currentUser}
            submitMessage={this.submitMessage} 
            messageChange={this.messageChange}
            siteClicked={this.state.siteClicked}
            selectedSite={this.state.selectedSite}
            setSelectedSite={this.setSelectedSite}
            maintainSelectedSite={this.maintainSelectedSite}
            handleLogout={this.handleLogout}
            handleProfileClick={this.handleProfileClick}
            profileClicked={this.profileClicked}
            />} />
          <Route exact path='/profile' render={(props) => <Profile {...props}
            currentUser={this.state.currentUser}
            editName={this.state.editName}
            editEmail={this.state.editEmail}
            editPassword={this.state.editPassword}
            handleEditChange={this.handleEditChange}
            handleEditSubmit={this.handleEditSubmit}
            handleLogout={this.handleLogout}
            />} />
          <Route exact path='/login' render={(props) => <LoginContainer {...props} 
            gotToken={this.gotToken}
            fetchCurrentUser={this.fetchCurrentUser}/>} />
        </Switch>
      </>
    )
  }
}

export default App 