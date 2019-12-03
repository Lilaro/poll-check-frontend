import React from 'react'
import {Form} from 'semantic-ui-react'

export default function Signup(props) {
    return (
        <div>
        <Form onSubmit={props.SignUpSubmitted}>
        <Form.Input 
            type="text" 
            name="signupName"
            placeholder='Name' 
            value={props.signupName}
            onChange={props.handleChange}
        />
        <Form.Input 
            type="text" 
            name="signupEmail" 
            placeholder='Email' 
            value={props.signupEmail}
            onChange={props.handleChange}
        />
        <Form.Input 
            type="password" 
            name="signupPassword" 
            placeholder='Password' 
            value={props.signupPassword}
            onChange={props.handleChange}
        />
      <Form.Button content="sign up" type="submit" value="Sign Up"/>
    </Form> 
        </div>
    )
}
