import React, { Component } from 'react'
import Map from '../components/Map'
import ChatContainer from './ChatContainer'

export class Sidebar extends Component {

    render() {
        
        return (
            <>
               <Map sites={this.props.sites}
                    channel={this.props.channel}
                    site={this.props.site}
                    messages={this.props.messages}
                    name={this.props.name}
                    userId={this.props.userId}
                    selectedSite={this.props.selectedSite}
                    currentUser={this.props.currentUser}
                    handleSiteClick={this.props.handleSiteClick}
                    count={this.props.count}
                        color={this.props.color}
                        alertClick={this.props.alertClick}></Map>
            </>
        )
    }
}

export default Sidebar
