import React from 'react'
import {Form} from 'semantic-ui-react'

export default function Login(props) {
    return (
      <div>
      <Form onSubmit={props.loginSubmitted}>
      
      <Form.Input 
        type="text" 
        name="loginEmail" 
        placeholder='Email' 
        value={props.loginEmail}
        onChange={props.handleChange}
      />
      <Form.Input 
        type="password"
        name="loginPassword" 
        placeholder='Password' 
        value={props.loginPassword}
        onChange={props.handleChange}
      />
      <Form.Button content="login" type="submit" value="Log In"/>
     
    </Form> 
        </div>
    )
}
