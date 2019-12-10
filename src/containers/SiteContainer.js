import React, { Component } from 'react'
import Site from '../components/Site'
import {Segment, Form, Breadcrumb, Header, Icon} from 'semantic-ui-react'
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
            <Header as='h3'>
                <img src={ballotBox} alt="Ballot Box Icon" />
                Find a polling site!
            </Header>
            
            <Form.Input fluid placeholder="Site Address" onChange={this.props.handleChange}
                icon={{ name: 'search'}} />
            
            <>
                <Segment style={{overflowY: 'scroll', height: 560, marginleft: '20px'  }}>
                { this.props.searchResults(this.props.searchTerm).map(site => {
                    return <Site  
                    key={site.id} 
                    site={site} 
                    channel={this.props.channel}
                    messages={this.props.messages}
                    siteClicked={this.props.siteClicked}
                    selectedSite={this.props.selectedSite}
                    handleSiteClick={this.props.handleSiteClick}
                    count={this.props.count}
                    color={this.props.color}
                    alertClick={this.props.alertClick}>                           
                    </Site>
                    })
                } 
                </Segment>
                <Breadcrumb>
                <Breadcrumb.Section link onClick={this.profileClicked}><h3>my account</h3></Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section link onClick={this.logoutClicked}><h3>logout</h3></Breadcrumb.Section>
            </Breadcrumb>            
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