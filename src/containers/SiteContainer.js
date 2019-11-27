import React, { Component } from 'react'
import ChatContainer from './ChatContainer'
import {Card} from 'semantic-ui-react'

export class SiteContainer extends Component {
    
    searchResults = (searchWord) => {
        // debugger
        if (this.props.sites) {
            return this.props.sites.filter(site => {
                if (site.voter_entrance && this.props.searchTerm !== ""){
                return site.voter_entrance.includes(searchWord.toLowerCase())}
            })
        } 
    }
    
    render() {
        return (
            <div>
              Find your poll site
                <form>
                    <input type="text" placeholder="street address" onChange={this.props.handleChange}></input>
                </form>
                <ul>
                { this.searchResults(this.props.searchTerm).map(site => {
                    return <Card   siteId={site.id}
                        onClick={this.props.handleSiteClick}>
                        {site.voter_entrance}, {site.city} - <strong>{site.site_name}</strong>
                    </Card>
                    })
                }
                </ul>
                {this.props.siteClicked ?
                    <ChatContainer token={this.props.token}>Chat Container</ChatContainer>
                :
                null}  
            </div>
        )
    }
}

export default SiteContainer
