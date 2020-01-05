import React, { Component } from 'react';
import Map from '../components/Map'
import {Grid, Header, Breadcrumb} from 'semantic-ui-react'
import {withRouter} from 'react-router'
import ballotBox from '../BallotIcon.svg'

export class MainContainer extends Component {

    state = {
        searchTerm: ""
    }


  alertClick = () => {
      
    this.setState({
      count: this.state.count + 1,
      color: 'red'
    })
  }

    handleSiteClick = (e, site) => {
        e.preventDefault()
        console.log('site clicked', site.id)

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
        this.setState({
            ...this.state,
            searchTerm: e.target.value,
        }, () => this.searchResults(this.state.searchTerm), console.log(this.state.searchTerm)
        )
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

    const 
    
    render() {
        console.log('filteredSites', this.state.filteredSites);
        
        console.log('currentUser', this.props.currentUser)
        
        console.log('messages', this.props.messages)
    console.log('channel', this.props.channel)
    return (
        <>
            <Grid rows={2}>
                <Grid.Row>
                <Header as='h3'><img src={ballotBox} alt="Ballot Box Icon" style={{paddingLeft: '30px'}}/>
                    Poll Check
                    <Breadcrumb floated='right'>
                <Breadcrumb.Section link onClick={this.profileClicked}><h4>my account</h4></Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section link onClick={this.logoutClicked}><h4>logout</h4></Breadcrumb.Section>
            </Breadcrumb>    
                </Header>
                </Grid.Row>
           
            <Grid.Row>
                
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
               
                </Grid.Row>
            </Grid>
            
       </>
        )
    }
}

export default withRouter(MainContainer)


// state = {
    //     selectedSite: {},
    //     siteClicked: false,
    // }
    
    // handleSiteClick = (e, site) => {
        //     console.log(site)
        //     // debugger
        //     e.preventDefault()
        //     this.setState({
            //         selectedSite: {...site},
            //         siteClicked: !this.state.siteClicked
            //     }, () => console.log('site clicked', this.state.selectedSite)
            //     )
            //     this.props.history.push('/chat')
            //   }

            
{/* <Grid.Column width={5}>
<Route render={(props) => <SiteContainer {...props}

    token={this.props.token}
    sites={this.props.sites}
    name={this.props.name}
    channel={this.props.channel}
    userId={this.props.userId}
    messages={this.props.messages}
    newMessage={this.props.newMessage}
    siteClicked={this.props.siteClicked}
    selectedSite={this.props.selectedSite}
    handleSiteClick={this.handleSiteClick}
    currentUser={this.props.currentUser}
    submitMessage={this.props.submitMessage}
    setSelectedSite={this.props.setSelectedSite}
    handleLogout={this.props.handleLogout}
    handleProfileClick={this.props.handleProfileClick}
    searchTerm={this.state.searchTerm}
    handleChange={this.handleChange}
    searchResults={this.searchResults}
    count={this.state.count}
    color={this.state.color}
    alertClick={this.alertClick}

    /> } /> 
</Grid.Column> */}