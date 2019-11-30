import React, { Component } from 'react'
import ChatContainer from './ChatContainer'
import Channel from '../components/Channel'


export class ChannelList extends Component {
    
    state = {
        // channels: [],
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
                {this.props.channels.map(channel => {
                   return <Channel channel={channel}> {channel.name}</Channel> 
                })}
              
            </div>
        )
    }
}

export default ChannelList
