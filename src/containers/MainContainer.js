import React, { Component } from 'react';
import SiteContainer from './SiteContainer';
import Sidebar from './Sidebar';
import {Grid} from 'semantic-ui-react'

export class MainContainer extends Component {

    state = {
        sites: [],
        filteredSites: [],
        selectedSite: {},
        channels: [],
        siteClicked: false
    }

    componentDidMount() {
        this.fetchSites()
        this.fetchChannels()    
    }

    fetchSites = () => {
        fetch('http://localhost:3000/poll_sites')
        .then(resp => resp.json())
        .then(data => this.setState({
            sites: data
        }))
    }

    fetchChannels = () => {
        fetch('http://localhost:3000/channels', {
        //   headers: {
        //     'Authorization': `Bearer ${this.props.token}`
        //   }
        })
        .then(resp => resp.json())
        .then(data => {
          this.setState({
           channels: data
          }, console.log(data))
        })    
      }

      filterSites = () => {
        this.setState({
            filteredSites: this.state.sites.filter(site => site.latitude && site.longitude)
        }, console.log(this.state.filteredSites))
      }

      handleSiteClick = (e, site) => {
          e.preventDefault()
          this.setState({
              selectedSite: site,
              siteClicked: !this.state.siteClicked
          }, console.log(this.state.selectedSite)
          )
      }    

    render() {
        console.log(this.state.sites)
        // console.log(this.state.filteredSites)
      
        return (
            <Grid columns={2}>
                <Grid.Column>
                   <SiteContainer
                        token={this.props.token}
                        sites={this.state.sites}
                        channels={this.state.channels}
                        siteClicked={this.state.siteClicked}
                        selectedSiteId={this.state.siteId}
                        channels={this.state.channels}
                        handleSiteClick={this.handleSiteClick}
                        handleChange={this.handleChange}></SiteContainer>
                </Grid.Column>
                <Grid.Column>
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

