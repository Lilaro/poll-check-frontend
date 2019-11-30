import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import ChatContainer from './ChatContainer'

export default class Site extends Component {
    
    render() {    
        return (
             <>
                <Card key={this.props.site.id}
                onClick={(e) => this.props.handleSiteClick(e, this.props.site)}>
                {this.props.site.voter_entrance}, {this.props.site.city} - <strong>{this.props.site.site_name}</strong>
                </Card>
                {this.props.siteClicked ?
                    <ChatContainer channels={this.props.channels}></ChatContainer>
                    :
                    null
                }
            </>
            )
    }
}



