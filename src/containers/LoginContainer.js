import React, {Component} from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup'

export default class LoginContainer extends Component {

    state = {
        signupName: '',
        signupEmail: '',
        signupPassword: '',
        loginEmail: '',
        loginPassword: '',
        errors: []
    }

    loginSubmitted = (event) => {
    event.preventDefault()

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: this.state.loginEmail, 
            password: this.state.loginPassword 
        })
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
            if (data.errors) {
            this.setState({
                errors: data.message
            })
            } else {
            this.props.gotToken(data.token, data.user.id, data.user.name)
            this.props.history.push('/home')
            }
        })
    }

      SignUpSubmitted = (event) => {
        event.preventDefault()
    
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name: this.state.signupName,
              email: this.state.signupEmail, 
              password: this.state.signupPassword
          })
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data)
          if (data.errors) {
            this.setState({
              errors: data.errors
            })
          } else {
            this.props.gotToken(data.token, data.user.id, data.user.name)
            this.props.history.push('/home')
          }
        })
      }

      handleChange = event => {
          event.persist()
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    render(){
        return (
        <>
            <Login 
                loginEmail={this.state.loginEmail}
                loginPassword={this.state.loginPassword}
                handleChange={this.handleChange} 
                loginSubmitted={this.loginSubmitted}
            />
              <br/>
            <Signup 
            signupName={this.state.signupName} 
            signupEmail={this.state.signupEmail}
            signuPpassword={this.state.signupPassword}
            handleChange={this.handleChange} 
            SignUpSubmitted={this.SignUpSubmitted}
            />
        </>
        )
    }
}
