import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatForm from '../components/ChatForm'
import {withRouter, Route} from 'react-router'

export class ChatContainer extends Component {


    render() {
        console.log('current user', this.props.currentUser.id)
        console.log('selectedSite', this.props.selectedSite)
        console.log('channel', this.props.channel.id)
   
        return (
            <div>
                <h2>{this.props.selectedSite.site_name}</h2>
                <ChatList 
                    selectedSite={this.props.selectedSite}
                    messages={this.props.messages} />
                <ChatForm newMessage={this.props.newMessage}
                    handleChange={this.handleChange}
                    submitMessage={this.props.submitMessage}
                    messageChange={this.props.messageChange}
                ></ChatForm>
            </div>
        )
    }
}

export default withRouter(ChatContainer)
