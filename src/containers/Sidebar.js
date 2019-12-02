import React, { Component } from 'react'
import Map from '../components/Map'

export class Sidebar extends Component {
        


    render() {
        console.log('sites', this.props.sites);
        
        return (
            <>
               <Map sites={this.props.sites}></Map>
            </>
        )
    }
}

export default Sidebar
