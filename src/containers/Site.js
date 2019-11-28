import React, {Component} from 'react'
import {Card} from 'semantic-ui-react'
import ChannelList from './ChannelList'

export default class Site extends Component {
    
    render() {    
        return (
             <>
                <Card onClick={this.props.handleSiteClick}>
                {this.props.site.voter_entrance}, {this.props.site.city} - <strong>{this.props.site_name}</strong>
                </Card>
                {this.props.siteClicked ?
                    <ChannelList></ChannelList>
                    :
                    null
                }
            </>
            )
    }
}



