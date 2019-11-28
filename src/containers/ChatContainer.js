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

    // handleSubmit = (e) => {
    //   e.preventDefault()
    
    //   fetch('http://localhost:3000/messages', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${this.props.token}`
    //     },
    //     body: JSON.stringify({
    //         content: this.state.newMessage,
    //         user_id: this.props.loggedInUserId,
    //         poll_site_id: this.props.site_id
    //     })
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //    })
    // }

    render() {
        return (
            <div>
                Chat Container
                <ChatList></ChatList>
                <ChatForm newMessage={this.state.newMessage}
                handleChange={this.handleChange}
                // handleSubmit={this.handleSubmit}
                ></ChatForm>
            </div>
        )
    }
}

export default ChatContainer
