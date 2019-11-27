import React, { Component } from 'react';
import ChatContainer from './ChatContainer';
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

    searchResults = (searchWord) => {
        // debugger
        if (this.state.sites) {
            return this.state.sites.filter(site => {
                if (site.voter_entrance && this.state.searchTerm !== ""){
                return site.voter_entrance.includes(searchWord.toLowerCase())}
            })
        } 
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
                    Find your poll site
                    <form>
                        <input type="text" placeholder="street address" onChange={this.handleChange}></input>
                    </form>
                    <ul>
                    { this.searchResults(this.state.searchTerm).map(site => {
                        return <Card   siteId={site.id}
                        onClick={this.handleSiteClick}>
                        {site.voter_entrance}, {site.city} - <strong>{site.site_name} </strong>
                        </Card>
                        })
                    }
                    </ul>
                    {this.state.siteClicked ?
                    <ChatContainer token={this.props.token}>Chat Container</ChatContainer>
                    :
                    null}
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
