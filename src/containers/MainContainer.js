import React, { Component } from 'react';
import SiteContainer from './SiteContainer';
import Sidebar from './Sidebar';
import {Card, Grid} from 'semantic-ui-react'

export class MainContainer extends Component {

    state = {
        sites: [],
        searchTerm: "",
        siteClicked: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/poll_sites')
        .then(resp => resp.json())
        .then(data => this.setState({
            sites: data
        }))
    }

    handleChange = (e) => {   
        console.log(this.state.sites)
        this.setState({
            searchTerm: e.target.value,
        }, () => this.searchResults(this.state.searchTerm))
    }

    handleSiteClick = (e) => {
        e.preventDefault()
        this.setState({
            siteClicked: true
        })

    }

    render() {
        console.log(this.state.sites)
      
        return (
            <Grid columns={2}>
                <Grid.Column>
                   <SiteContainer searchTerm={this.state.searchTerm}
                   sites={this.state.sites}
                   siteClicked={this.state.siteClicked}
                   handleSiteClick={this.handleSiteClick}
                   handleChange={this.handleChange}></SiteContainer>
                </Grid.Column>
                <Grid.Column>
                    <Sidebar sites={this.state.sites} 
                        name={this.props.name}>
                        Sidebar
                    </Sidebar>
                </Grid.Column>
            </Grid>
        )
    }
}

export default MainContainer

