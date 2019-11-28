import React, { Component } from 'react'
import ChatContainer from './ChatContainer'


export class ChannelList extends Component {
    
    state = {
        channels: [],
        channelClicked: false
    }

    channelClick = () => {
        this.setState({
            channelClicked: !this.state.channelClicked
        })
    }
    
    render() {
        return (
            <div>
              <p onClick={this.channelClick}>channel</p> 
              {this.state.channelClicked ?
                    <ChatContainer token={this.props.token}>Chat Container</ChatContainer>
                :
                null}   
            </div>
        )
    }
}

export default ChannelList
