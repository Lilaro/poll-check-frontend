import React, { Component } from 'react'

export class Sidebar extends Component {
        


    render() {
        
        return (
            <div>
                Hi, {this.props.name}!
                <p>Chat channel 1</p>
                <p>Chat channel 2</p>
                <p>Chat channel 3</p>
                {/* { ? :} */}
                {/* //fetch with chat id to retrieve messages */}
            </div>
        )
    }
}

export default Sidebar
