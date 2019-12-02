import React, { Component } from 'react';
import pollData from '../data/poll-sites';
import SiteContainer from './SiteContainer';
import Sidebar from './Sidebar';
import {Grid} from 'semantic-ui-react'

export class MainContainer extends Component {

    // state = {
    //     sites: [],
    //     messages: [],
    //     channel: {},

    // }

    // componentDidMount() {
    //     fetch('http://localhost:3000/poll_sites')
    //     .then(resp => resp.json())
    //     .then(data => this.setState({
    //         sites: data
    //     }));
    //     this.fetchChannels() 
    //     this.fetchMessages()   
    // }

    // fetchChannels = () => {
    //     fetch('http://localhost:3000/channels', {
    //     //   headers: {
    //     //     'Authorization': `Bearer ${this.props.token}`
    //     //   }
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //       this.setState({
    //        channel: data[2]
    //       })
    //     })    
    //   }

    //   fetchMessages = () => {
    //     fetch('http://localhost:3000/messages')
    //     .then(resp => resp.json())
    //     .then(data => this.setState({
    //         messages: data
    //     }, () => console.log(this.state.messages)))
    //   }

    //   filterSites = () => {
    //     let filtered = this.state.sites.filter(site => site.latitude && site.longitude)
    //     this.setState({
    //         filteredSites: filtered
    //     }, console.log(this.state.filteredSites))
    //   }

    //   handleSiteClick = (e, site) => {
    //       e.preventDefault()
    //       this.setState({
    //           selectedSite: site,
    //           siteClicked: !this.state.siteClicked
    //       }, console.log(this.state.selectedSite)
    //       )
    //   }    

    render() {
       console.log('sites', this.props.sites)
    
    console.log('messages', this.props.messages)
    console.log('channel', this.props.channel)
        return (
            <Grid columns={2}>
                <Grid.Column width={3}>
                   <SiteContainer
                        token={this.props.token}
                        sites={this.props.sites}
                        channel={this.props.channel}
                        name={this.props.name}
                        userId={this.props.userId}
                        messages={this.props.messages}>
                    </SiteContainer>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Sidebar 
                        sites={this.props.sites} 
                        name={this.props.name}
                        token={this.props.token}
                        displayedSite={this.props.site}>
                    </Sidebar>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MainContainer

