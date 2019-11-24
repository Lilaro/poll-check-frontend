import './App.css';
// import {useSelector, useDispatch} from 'react-redux'
import ReactMapGL, {Marker} from 'react-map-gl'
import React, {Component} from 'react'
import LoginContainer from './components/LoginContainer'
import ChatContainer from './components/ChatContainer'
import Sidebar from './components/Sidebar'

export class App extends Component {

  state = {
    sites: []
  }
    
  componentDidMount() {
    fetch('http://localhost:3000/poll_sites')
    .then(resp => resp.json())
    .then(data => this.setState({
      pollSites: data
    }))
  }
  

  render() {
    return (
      <div>
        {/* {this.state.pollSites.map(site => site={site})} */}
        <LoginContainer></LoginContainer>
        <ChatContainer></ChatContainer>
        <Sidebar sites={this.state.sites}></Sidebar>
      </div>
    )
  }
}

export default App 