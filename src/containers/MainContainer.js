import React, { Component } from 'react';
// import pollData from '../data/poll-sites';
import SiteContainer from './SiteContainer';
import ChatContainer from './ChatContainer'
import Sidebar from './Sidebar';
import {Grid} from 'semantic-ui-react'
import {withRouter, Route} from 'react-router'

export class MainContainer extends Component {

    // state = {
    //     selectedSite: {},
    //     siteClicked: false,
    // }

    // handleSiteClick = (e, site) => {
    //     console.log(site)
    //     // debugger
    //     e.preventDefault()
    //     this.setState({
    //         selectedSite: {...site},
    //         siteClicked: !this.state.siteClicked
    //     }, () => console.log('site clicked', this.state.selectedSite)
    //     )
    //     this.props.history.push('/chat')
    //   }

    render() {
       console.log('currentUser', this.props.currentUser)
    
    console.log('messages', this.props.messages)
    console.log('channel', this.props.channel)
        return (
            <>
          {/* {this.props.siteClicked ? 
            <Route Component={ChatContainer}/>
                : */}
            <Grid columns={2}>
                <Grid.Column width={5}>
                <Route render={(props) => <SiteContainer {...props}

                    token={this.props.token}
                    sites={this.props.sites}
                    name={this.props.name}
                    channel={this.props.channel}
                    userId={this.props.userId}
                    messages={this.props.messages}
                    newMessage={this.props.newMessage}
                    // siteClicked={this.props.siteClicked}
                    // selectedSite={this.props.selectedSite}
                    handleSiteClick={this.props.handleSiteClick}
                    currentUser={this.props.currentUser}
                    submitMessage={this.props.submitMessage}
                    setSelectedSite={this.props.setSelectedSite}
                    handleLogout={this.props.handleLogout}
                    handleProfileClick={this.props.handleProfileClick}

                /> } /> 
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
                        // siteClicked={this.props.siteClicked}
                        // selectedSite={this.props.selectedSite}
                        handleSiteClick={this.props.handleSiteClick}
                        currentUser={this.props.currentUser}
                        submitMessage={this.props.submitMessage}
                        messageChange={this.props.messageChange}
                        >
                    </Sidebar>
                </Grid.Column>
            </Grid>
            
    {/* } */}
    </>
        )
    }
}

export default withRouter(MainContainer)

