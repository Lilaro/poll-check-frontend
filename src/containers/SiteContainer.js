import React, { Component } from 'react'
import Site from './Site'
import {Card, Form, Button, Header} from 'semantic-ui-react'
import {Marker} from 'react-map-gl'
import ballotBox from '../BallotIcon.svg'

export class SiteContainer extends Component {

    
         
    
    
    
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
                <Header as='h2'>
                <Button style={{float: 'right'}} content='edit account'
                    onClick={this.profileClicked}/>
                <Button style={{float: 'right'}} content='logout'
                    onClick={this.logoutClicked}/>
                </Header>
                <Form.Input type="text" placeholder="street address" onChange={this.props.handleChange} style={{float: 'left'}}/>
                {/* {this.props.searchTerm !== "" ?  */}
                <>
                    <ul>
                    { this.props.searchResults(this.props.searchTerm).map(site => {
                        return <Site  
                        key={site.id} 
                        site={site} 
                        // name={this.props.name}
                        // userId={this.props.userId}
                        channel={this.props.channel}
                        messages={this.props.messages}
                        siteClicked={this.props.siteClicked}
                        selectedSite={this.props.selectedSite}
                        handleSiteClick={this.props.handleSiteClick}>                           
                        </Site>
                        })
                    } 
                    </ul>
                    
                    </>
                   
            
            </div>
        )
    }
}

export default SiteContainer

// state = {
//     searchTerm: "",
// }

// handleSiteClick = (e, site) => {
//     e.preventDefault()
//     console.log(site.id)

//     this.props.setSelectedSite(site)
//     this.props.history.push(`/chat/${site.id}`)   
//   }

// searchResults = (searchWord) => {
//     // debugger
//     if (this.props.sites) {
//         return this.props.sites.filter(site => {
    //             if (site.voter_entrance && this.searchTerm !== ""){
//                 return site.voter_entrance.includes(searchWord)}
//             })
//         } 
//     }

//     handleChange = (e) => {   
//         this.setState({
    //             searchTerm: e.target.value,
    //         }, () => this.searchResults(this.state.searchTerm))
    //     }

    
// makeSiteMarkers = () => {
//     return this.props.map((site) => 
// <Marker key={site.id}
//         latitude={site.attributes.latitude}
//         longitude={site.attributes.longitude}
//         onClick={(e) => this.setSelectedsite(null, e)}
//     >
//         <button className="ballotBox" onClick={(e) => {
//             e.preventDefault()
//             this.props.setSelectedsite(site, e)
//         }}>
//             <img src = {ballotBox} alt="site location" />
//         </button>
//     </Marker>    
//     )} 