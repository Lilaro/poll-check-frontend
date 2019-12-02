import React, { Component } from 'react';
import pollData from '../data/poll-sites';
import SiteContainer from './SiteContainer';
import Sidebar from './Sidebar';
import {Grid} from 'semantic-ui-react'

export class MainContainer extends Component {


    render() {
    //    console.log('sites', this.props.sites)
    
    console.log('messages', this.props.messages)
    console.log('channel', this.props.channel)
        return (
            <Grid columns={2}>
                <Grid.Column width={3}>
                   <SiteContainer
                        token={this.props.token}
                        sites={this.props.sites}
                        name={this.props.name}
                        channel={this.props.channel}
                        userId={this.props.userId}
                        messages={this.props.messages}
                        newMessage={this.props.newMessage}
                        siteClicked={this.props.siteClicked}
                        selectedSite={this.props.selectedSite}
                        handleSiteClick={this.props.handleSiteClick}
                        currentUser={this.props.currentUser}
                        submitMessage={this.props.submitMessage}
                        >
                    </SiteContainer>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Sidebar 
                        sites={this.props.sites} 
                        name={this.props.name}
                        token={this.props.token}
                        channel={this.props.channel}
                        userId={this.props.userId}
                        messages={this.props.messages}
                        displayedSite={this.props.site}
                        siteClicked={this.props.siteClicked}
                        selectedSite={this.props.selectedSite}
                        handleSiteClick={this.props.handleSiteClick}
                        currentUser={this.props.currentUser}
                        submitMessage={this.props.submitMessage}
                        messageChange={this.props.messageChange}
                        >
                    </Sidebar>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MainContainer

