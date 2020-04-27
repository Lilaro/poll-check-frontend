import React, { Component } from 'react'
import {Segment, Form, Breadcrumb, Header, Icon, Card, Button} from 'semantic-ui-react'
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
                <Segment style={{overflowY: 'scroll', height: 560, marginleft: '20px'}}>
                    { this.props.searchResults(this.props.searchTerm).map(site => {
                        return  <Card
                            key={site.id} 
                            site={site} 
                            channel={this.props.channel}
                            messages={this.props.messages}
                            siteClicked={this.props.siteClicked}
                            selectedSite={this.props.selectedSite}
                            handleSiteClick={this.props.handleSiteClick}
                            count={this.props.count}
                            color={this.props.color}
                            alertClick={this.props.alertClick}
                            latitude={site.latitude} longtitude={site.longitude}
                            onClick={(e) => this.props.handleSiteClick(e, site)}> 
                            <p>{site.voter_entrance}, {site.city}</p>
                            <strong>{site.site_name}</strong>   
                            <Button>
                            <Icon name='comments outline'/>Chat</Button>
                        </Card> 
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
