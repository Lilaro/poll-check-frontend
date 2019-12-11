import React, {Component} from 'react'
import {Card, Button, Icon} from 'semantic-ui-react'
import ChatContainer from '../containers/ChatContainer'
import { withRouter } from 'react-router-dom'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'

class Site extends Component {
    
   
    
    render() {
     
        return (
            <>
               
                <Card
                key={this.props.site.id}
                siteid={this.props.site.id}
                latitude={this.props.site.latitude} longtitude={this.props.site.longitude}
                onClick={(e) => this.props.handleSiteClick(e, this.props.site)}> 
                <p>{this.props.site.voter_entrance}, {this.props.site.city}</p>
                <strong>{this.props.site.site_name}</strong>   
                <Button>
                    <Icon name='comments outline' />Chat</Button>
                </Card> 
                
            </>
            )
        }
    }
    
    export default withRouter(Site)
    
    
    // state = {
        //     siteClicked: false,
    //     selectedSite: {},
    // }


    // handleSiteClick = (e, site) => {
    //     e.preventDefault()
    //     this.setState({
    //         selectedSite: site,
    //         siteClicked: !this.state.siteClicked
    //     })
    //     this.props.history.push('/chat')
    // }
        {/* <Icon link key={this.props.site.id} name="bullseye" color={this.props.color} onClick={this.props.alertClick}/> */}
        {/* {this.props.siteClicked ?
            <ChatContainer 
            channelId={this.props.channel.id}
            site={this.props.site}
            messages={this.props.messages}
            name={this.props.name}
            userId={this.props.userId}>
            </ChatContainer>
            :
        null*/}