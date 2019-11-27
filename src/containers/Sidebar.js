import React, { Component } from 'react'
import Site from '../components/Site'

export class Sidebar extends Component {
        


    render() {
        
        return (
            <div>
                Hi, {this.props.name}!
            </div>
        )
    }
}

export default Sidebar
