import React, { Component } from 'react'
import Site from './Site'
import {Card, Form, Button} from 'semantic-ui-react'

export class SiteContainer extends Component {

    state = {
        searchTerm: "",
        // siteClicked: false,
        // selectedSite: {},
    }

    handleSiteClick = (e, site) => {
        e.preventDefault()
        console.log(site.id)
        this.props.setSelectedSite(site)
       
        this.props.history.push(`/chat/${site.id}`)
        
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

        logoutClicked = (e) => {
            e.preventDefault()
            
            this.props.handleLogout()
            this.props.history.push('/login')
        }

        profileClicked = (e) => {
            e.preventDefault()
            this.props.history.push('/profile')
        }

        render() {
        return (
            <div>
              <h3 style={{float: 'left'}}>Find a poll site!</h3>
                <Form>
                <Button style={{float: 'right'}} content='edit account'
                    onClick={this.profileClicked}/>
                <Button style={{float: 'right'}} content='logout'
                    onClick={this.logoutClicked}/>
                </Form>
                <Form.Input type="text" placeholder="street address" onChange={this.handleChange}/>
                {/* {this.state.searchTerm !== "" ? 
                <> */}
                    <ul>
                    { this.searchResults(this.state.searchTerm).map(site => {
                        return <Site  
                        key={site.id} 
                        site={site} 
                        // name={this.props.name}
                        // userId={this.props.userId}
                        channel={this.props.channel}
                        messages={this.props.messages}
                        siteClicked={this.props.siteClicked}
                        selectedSite={this.props.selectedSite}
                        handleSiteClick={this.handleSiteClick}>                           
                        </Site>
                        })
                    } 
                    </ul>
                    
                    {/* </>
                    :
                    null} */}
            
            </div>
        )
    }
}

export default SiteContainer
