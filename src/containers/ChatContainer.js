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
            user_id: this.props.userId,
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
        console.log('userId', this.props.userId)
        console.log('site', this.props.site)
        console.log('channel', this.props.channelId)
        
        return (
            <div>
                Chat Container
                <ChatList>
                    
                    {/* {this.props.messages.filter(message => message.poll_site_id === this.props.site.id)} */}
                </ChatList>
                <ChatForm newMessage={this.state.newMessage}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                ></ChatForm>
            </div>
        )
    }
}

export default ChatContainer
