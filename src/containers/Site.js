import React, {Component} from 'react'
import {Card, Button} from 'semantic-ui-react'
import ChatContainer from './ChatContainer'

export default class Site extends Component {
    
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
    }

    render() { 
        console.log(this.state.selectedSite)
        return (
             <>
                <Card key={this.props.site.id}
                siteId={this.props.site.id}
                onClick={(e) => this.handleSiteClick(e, this.props.site)}>
                {this.props.site.voter_entrance}, {this.props.site.city} - <strong>{this.props.site.site_name}</strong>
                <Button>Chat</Button>
                </Card>
                {this.state.siteClicked ?
                    <ChatContainer channelId={this.props.channel.id} siteId={this.props.site.id}></ChatContainer>
                    :
                    null
                }
            </>
            )
    }
}



