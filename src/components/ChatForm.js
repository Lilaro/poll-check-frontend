import React from 'react'

export default function ChatForm(props) {
    return (
        <div>
                
            <form onSubmit={props.submitMessage}>
                <input type="text" placeholder="send a message"
                onChange={props.messageChange}
                >
                </input>
               
            </form>
        </div>
    )
}
