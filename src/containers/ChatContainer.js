import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatForm from '../components/ChatForm'

export class ChatContainer extends Component {

    // state = {
    //     newMessage: ""
    // }

    // handleChange = (e) => {
    //     this.setState({
    //         newMessage: e.target.value
    //     }, () => console.log(this.state.newMessage)
    //     )
    // }

    // handleSubmit = (e) => {
    //   e.preventDefault()
    
    //   fetch('http://localhost:3000/messages', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //         'Authorization': `Bearer ${localStorage.token}`
    //     },
    //     body: JSON.stringify({
    //         content: this.state.newMessage,
    //         user_id: this.props.currentUser.id,
    //         poll_site_id: this.props.selectedSite.id,
    //         channel_id: this.props.channel.id
    //     })
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //    })
    // }

    // filteredMessages = () => {
    //     return this.props.messages.filter(message => message.poll_site_id === this.props.selectedSite.id)
    // }

    render() {
        console.log('current user', this.props.currentUser.id)
        console.log('selectedSite', this.props.selectedSite)
        console.log('channel', this.props.channel.id)
        // console.log('fmessages', this.filteredMessages());
        
        
        return (
            <div>
                Chat Container
                <ChatList selectedSite={this.props.selectedSite}>
                </ChatList>
                <ChatForm newMessage={this.props.newMessage}
                    handleChange={this.handleChange}
                    submitMessage={this.props.submitMessage}
                    messageChange={this.props.messageChange}
                ></ChatForm>
            </div>
        )
    }
}

export default ChatContainer
