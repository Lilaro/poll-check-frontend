import React, { Component } from 'react'
import {Segment} from 'semantic-ui-react'
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
            <Segment>
                {this.props.channels.map(channel => {
                   return <Channel channel={channel}> {channel.name}</Channel> 
                })}
              
            </Segment>
        )
    }
}

export default ChannelList
