import React from 'react'
import {Form, Segment} from 'semantic-ui-react'

export default function Login(props) {
    return (
      <div >
      <Segment inverted style={{margin: '40px', height: '217px'}}> 
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
    </Segment> 
        </div>
    )
}
