import React, { Component } from 'react'
import Map from '../components/Map'
import ChatContainer from './ChatContainer'

export class Sidebar extends Component {
        


    render() {
        console.log('site clicked', this.props.siteClicked);
        
        return (
            <>
            {/* {this.props.siteClicked ?
                <ChatContainer
                    channel={this.props.channel}
                    site={this.props.site}
                    messages={this.props.messages}
                    newMessage={this.props.newMessage}
                    name={this.props.name}
                    userId={this.props.userId}
                    selectedSite={this.props.selectedSite}
                    currentUser={this.props.currentUser}
                    submitMessage={this.props.submitMessage}
                    messageChange={this.props.messageChange}>
                </ChatContainer>
                : */}
               <Map sites={this.props.sites}
                    channel={this.props.channel}
                    site={this.props.site}
                    messages={this.props.messages}
                    name={this.props.name}
                    userId={this.props.userId}
                    selectedSite={this.props.selectedSite}
                    currentUser={this.props.currentUser}
                    handleSiteClick={this.props.handleSiteClick}></Map>
    {/* } */}
            </>
        )
    }
}

export default Sidebar
