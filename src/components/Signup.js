import React from 'react'

export default function Signup(props) {
    return (
        <div>
        <form onSubmit={props.SignUpSubmitted}>
        <input 
            type="text" 
            name="signupName"
            placeholder='Name' 
            value={props.signupName}
            onChange={props.handleChange}
        />
        <input 
            type="text" 
            name="signupEmail" 
            placeholder='Email' 
            value={props.signupEmail}
            onChange={props.handleChange}
        />
        <input 
            type="password" 
            name="signupPassword" 
            placeholder='Password' 
            value={props.signupPassword}
            onChange={props.handleChange}
        />
      <input type="submit" value="Sign Up"/>
    </form> 
        </div>
    )
}
