import React, {Component} from 'react'
import {Card, Button} from 'semantic-ui-react'
import ChatContainer from './ChatContainer'
import { withRouter } from 'react-router-dom'

class Site extends Component {
    
    state = {
        siteClicked: false,
        selectedSite: {},
    }


    handleSiteClick = (e, site) => {
        e.preventDefault()
        this.setState({
            selectedSite: site,
            siteClicked: !this.state.siteClicked
        })
        this.props.history.push('/chat')
    }

    render() { 
        console.log(this.props.site)
        return (
             <>
                <Card key={this.props.site.id}
                siteId={this.props.site.id}
                latitude={this.props.site.latitude} longtitude={this.props.site.longitude}
                onClick={(e) => this.handleSiteClick(e, this.props.site)}>
                <p>{this.props.site.voter_entrance}, {this.props.site.city}</p>
                <strong>{this.props.site.site_name}</strong>
                <Button>Chat</Button>
                </Card>
                {this.state.siteClicked ?
                    <ChatContainer channelId={this.props.channel.id} site={this.props.site}></ChatContainer>
                    :
                    null
                }
            </>
            )
    }
}

export default withRouter(Site)

