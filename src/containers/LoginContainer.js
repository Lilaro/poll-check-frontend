import React, {Component} from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {Grid} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

class LoginContainer extends Component {

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
        <Grid>
          <Grid.Column>
            <Login 
                loginEmail={this.state.loginEmail}
                loginPassword={this.state.loginPassword}
                handleChange={this.handleChange} 
                loginSubmitted={this.loginSubmitted}
            />
          </Grid.Column>
          <Grid.Column>
            <Signup 
            signupName={this.state.signupName} 
            signupEmail={this.state.signupEmail}
            signuPpassword={this.state.signupPassword}
            handleChange={this.handleChange} 
            SignUpSubmitted={this.SignUpSubmitted}
            />
          </Grid.Column>
        </Grid>
        )
    }
}
export default withRouter(LoginContainer)

{/* <Grid centered columns={2}>
    <Grid.Column>
      <Header as="h2" textAlign="center">
        Login
      </Header>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Login
          </Button>
        </Form>
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid> */}