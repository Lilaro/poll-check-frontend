import React, { Component } from 'react';
import ChatContainer from './ChatContainer';
import Sidebar from './Sidebar'

export class MainContainer extends Component {

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
                Home
                <ChatContainer>Chat</ChatContainer>
                <Sidebar sites={this.state.sites}>Sidebar</Sidebar>
            </div>
        )
    }
}

export default MainContainer
