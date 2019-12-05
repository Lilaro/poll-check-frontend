import React from 'react'
import {Form} from 'semantic-ui-react'

export default function ChatForm(props) {
    return (
        <div>
                
            <Form onSubmit={props.submitMessage}>
                <Form.Input inverted type="text" placeholder="send a message"
                onChange={props.messageChange}
                />
            </Form>
        </div>
    )
}
