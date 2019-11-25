import React from 'react'

export default function Login(props) {
    return (
        <div>
           <form onSubmit={props.loginSubmitted}>
      <input 
        type="text" 
        name="loginEmail" 
        placeholder='Email' 
        value={props.loginEmail}
        onChange={props.handleChange}
      />
      <input 
        type="password"
        name="loginPassword" 
        placeholder='Password' 
        value={props.loginPassword}
        onChange={props.handleChange}
      />
      <input type="submit" value="Log In"/>
    </form> 
        </div>
    )
}
