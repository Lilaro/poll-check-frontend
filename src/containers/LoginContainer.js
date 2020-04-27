import React, {Component} from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import {Grid, Header} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'
import ballotBox from '../BallotIcon.svg'


class LoginContainer extends Component {

  state = {
      signupName: '',
      signupEmail: '',
      signupPassword: '',
      loginEmail: '',
      loginPassword: '',
      errors: [],
      signupClicked: false
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
        }, window.alert("The email address or password you entered are invalid!"))
        } else {
        // this.props.gotToken(data.token, data.user.id, data.user.name)
        localStorage.setItem("token", data.token)
        this.props.fetchCurrentUser()
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
        }, window.alert("The email address you entered is already in use!"))
      } else {
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

  handleSignupClick = (event) => {
    this.setState({
      signupClicked: true
    }, console.log('signup clicked'))
  }

  render(){
    return (
      <Grid centered columns={2} rows={2}>
        <Grid.Row>
        <Header style={{margin: '30px'}}>
          <img src={ballotBox} alt="Ballot Box Icon"/>
          <h1>Poll Check</h1>
          <h5>rides - lines - voting problems?</h5>
          <h4>communicate with your neighbors about election day!</h4>
        </Header> 
        </Grid.Row>
        <Grid.Row>
          {!this.state.signupClicked ? 
            <Login 
              loginEmail={this.state.loginEmail}
              loginPassword={this.state.loginPassword}
              handleChange={this.handleChange} 
              loginSubmitted={this.loginSubmitted}
              handleSignupClick={this.handleSignupClick}
            /> 
          :
            <Signup 
              signupName={this.state.signupName} 
              signupEmail={this.state.signupEmail}
              signuPpassword={this.state.signupPassword}
              handleChange={this.handleChange} 
              SignUpSubmitted={this.SignUpSubmitted}
            />
        } 
        </Grid.Row> 
      </Grid>
    )
  }
}
export default withRouter(LoginContainer)