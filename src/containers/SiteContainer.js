import React, { Component } from 'react'
import Site from './Site'
import {Card} from 'semantic-ui-react'

export class SiteContainer extends Component {

    state = {
        searchTerm: "",
       
    }
    
    searchResults = (searchWord) => {
        // debugger
        if (this.props.sites) {
            return this.props.sites.filter(site => {
                if (site.voter_entrance && this.searchTerm !== ""){
                    return site.voter_entrance.includes(searchWord)}
                })
            } 
        }
        
        handleChange = (e) => {   
            console.log(this.props.sites)
            this.setState({
                searchTerm: e.target.value,
            }, () => this.searchResults(this.state.searchTerm))
        }

        render() {
        return (
            <div>
              Find your poll site
                <form>
                    <input type="text" placeholder="street address" onChange={this.handleChange}></input>
                </form>
                {this.state.searchTerm !== "" ? 
                    <ul>
                    { this.searchResults(this.state.searchTerm).map(site => {
                        return <Site  
                            key={site.id} 
                            site={site} 
                            channel={this.props.channel}
                            siteClicked={this.props.siteClicked}
                            clickedSiteId={this.props.clickedSiteId}
                            handleSiteClick={this.props.handleSiteClick}>                           
                        </Site>
                        })
                    } 
                    </ul>
                    :
                    null}
            
            </div>
        )
    }
}

export default SiteContainer
