import React, { Component } from 'react';
import SiteContainer from './SiteContainer';
import Sidebar from './Sidebar';
import {Grid} from 'semantic-ui-react'

export class MainContainer extends Component {

    state = {
        sites: [],
        filteredSites: [],
        // selectedSite: {},
        channel: {},
        // siteClicked: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/poll_sites')
        .then(resp => resp.json())
        .then(data => this.setState({
            sites: data
        }));
        this.fetchChannels()    
    }

    // fetchSites = () => {
    //     fetch('http://localhost:3000/poll_sites')
    //     .then(resp => resp.json())
    //     .then(data => this.setState({
    //         sites: data
    //     }))
    // }

    fetchChannels = () => {
        fetch('http://localhost:3000/channels', {
        //   headers: {
        //     'Authorization': `Bearer ${this.props.token}`
        //   }
        })
        .then(resp => resp.json())
        .then(data => {
          this.setState({
           channel: data[2]
          })
        })    
      }

      filterSites = () => {
        this.setState({
            filteredSites: this.state.sites.filter(site => site.latitude && site.longitude)
        }, console.log(this.state.filteredSites))
      }

    //   handleSiteClick = (e, site) => {
    //       e.preventDefault()
    //       this.setState({
    //           selectedSite: site,
    //           siteClicked: !this.state.siteClicked
    //       }, console.log(this.state.selectedSite)
    //       )
    //   }    

    render() {
        console.log(this.state.sites)
        // console.log(this.state.channel)
      
        return (
            <Grid columns={2}>
                <Grid.Column width={3}>
                   <SiteContainer
                        token={this.props.token}
                        sites={this.state.sites}
                        channel={this.state.channel}
                        siteClicked={this.state.siteClicked}
                        selectedSiteId={this.state.siteId}
                        handleSiteClick={this.handleSiteClick}
                        handleChange={this.handleChange}></SiteContainer>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Sidebar 
                        sites={this.state.sites} 
                        name={this.props.name}
                        token={this.props.token}
                        displayedSite={this.state.site}
                    >
                        Sidebar
                    </Sidebar>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MainContainer

