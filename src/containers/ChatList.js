import React, { Component } from 'react'

export class ChatList extends Component {
    render() {
        return (
          <>
            {this.props.selectedSite.messages.map(message => {
              return <p>{message.user_id} - {message.content}</p>
            })}
          </>
        )
    }
}

export default ChatList
