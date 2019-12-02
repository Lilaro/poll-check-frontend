import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatForm from '../components/ChatForm'

export class ChatContainer extends Component {

    state = {
        newMessage: ""
    }

    handleChange = (e) => {
        this.setState({
            newMessage: e.target.value
        }, () => console.log(this.state.newMessage)
        )
    }

    handleSubmit = (e) => {
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
            user_id: localStorage.userId,
            poll_site_id: this.props.site.siteId,
            channel_id: this.props.channel.channelId
        })
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
       })
    }

    render() {
        console.log(this.props.site)
        return (
            <div channelId={this.props.channelId} siteId={this.props.siteId}>
                Chat Container
                <ChatList></ChatList>
                <ChatForm newMessage={this.state.newMessage}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                ></ChatForm>
            </div>
        )
    }
}

export default ChatContainer
