import React, { Component } from 'react'
import ChatContainer from './ChatContainer'
import Site from '../components/Site'
import {Card} from 'semantic-ui-react'

export class SiteContainer extends Component {

    state = {
        searchTerm: "",
        siteClicked: false
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

        handleSiteClick = (e) => {
            e.preventDefault()
            console.log("hello")

            this.setState({
                siteClicked: !this.state.siteClicked
            })
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
                        return <Site  key={site.id} site={site} siteId={site.id}
                            handleSiteClick={this.handleSiteClick}>                           
                        </Site>
                        })
                    } 
                    </ul>
                    :
                    null}
                {this.state.siteClicked ?
                    <ChatContainer token={this.props.token}>Chat Container</ChatContainer>
                :
                null}  
            </div>
        )
    }
}

export default SiteContainer
