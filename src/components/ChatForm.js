import React from 'react'
import {Form} from 'semantic-ui-react'

export default function ChatForm(props) {
    return (
        <div>
                
            <Form onSubmit={props.submitMessage}>
                <input type="text" placeholder="send a message"
                onChange={props.messageChange}
                >
                </input>
               
            </Form>
        </div>
    )
}
