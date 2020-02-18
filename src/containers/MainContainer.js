import React, { Component } from 'react';
import Map from '../components/Map'
import {Segment, Header, Breadcrumb} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import ballotBox from '../BallotIcon.svg'

export class MainContainer extends Component {

    state = {
      searchTerm: ""
    }

    //route to chat page when user clicks 'chat' button on selected site's popup
    handleSiteClick = (e, site) => {
      e.preventDefault()
      this.props.setSelectedSite(site)
      this.props.history.push(`/chat/${site.id}`)          
    }
    
    //Filter through all poll sites by entrance address by comparing to searchTerm
    searchResults = (searchWord) => {
      if (this.props.sites) {
        return this.props.sites.filter(site => {
          if (site.voter_entrance && this.searchTerm !== ""){
          return site.voter_entrance.includes(searchWord)}
        })
      } 
    }
    
    //Populate searchTerm in state as user types
    //and pass to searchResults function
    handleChange = (e) => {   
      this.setState({
      ...this.state,
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
      <>
         <Segment clearing>
           <Header as='h3' floated='left'>
             <img src={ballotBox} alt="Ballot Box Icon"  style={{height: '40px', width: '40px'}}/>
                  Poll Check
           </Header>
           <Header floated='right'>
             <Breadcrumb floated='right'>
             <Breadcrumb.Section link onClick={this.profileClicked}><h4>my account</h4></Breadcrumb.Section>
             <Breadcrumb.Divider>/</Breadcrumb.Divider>
             <Breadcrumb.Section link onClick={this.logoutClicked}><h4>logout</h4></Breadcrumb.Section>
             </Breadcrumb>    
           </Header>
         </Segment>
                
          <Map
              sites={this.props.sites} 
              name={this.props.name}
              token={this.props.token}
              channel={this.props.channel}
              userId={this.props.userId}
              messages={this.props.messages}
              displayedSite={this.props.site}
              siteClicked={this.props.siteClicked}
              selectedSite={this.props.selectedSite}
              setSelectedSite={this.props.setSelectedSite}
              handleSiteClick={this.handleSiteClick}
              currentUser={this.props.currentUser}
              submitMessage={this.props.submitMessage}
              messageChange={this.props.messageChange}
              searchTerm={this.state.searchTerm}
              handleChange={this.handleChange}
              searchResults={this.searchResults}
              count={this.state.count}
              color={this.state.color}
              alertClick={this.alertClick}
          >
          </Map>           
      </>
    )
  }
}

export default withRouter(MainContainer)
