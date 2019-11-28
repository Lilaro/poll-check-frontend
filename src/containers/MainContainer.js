import React, { Component } from 'react';
import SiteContainer from './SiteContainer';
import Sidebar from './Sidebar';
import {Grid} from 'semantic-ui-react'

export class MainContainer extends Component {

    state = {
        sites: [],
        clickedId: {}
        // searchTerm: "",
        // siteClicked: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/poll_sites')
        .then(resp => resp.json())
        .then(data => this.setState({
            sites: data
        }))
    }

    handleSiteClick = (site) => {
        this.setState({clickedId: site})
    }
    
    

    render() {
        console.log(this.state.sites)
      
        return (
            <Grid columns={2}>
                <Grid.Column>
                   <SiteContainer
                   token={this.props.token}
                   sites={this.state.sites}
                   siteClicked={this.state.siteClicked}
                   handleSiteClick={this.handleSiteClick}
                   handleChange={this.handleChange}></SiteContainer>
                </Grid.Column>
                <Grid.Column>
                    <Sidebar sites={this.state.sites} 
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

