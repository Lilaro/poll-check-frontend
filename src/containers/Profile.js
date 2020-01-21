import React, { Component } from 'react'
import {Form, Header, Segment, Breadcrumb} from 'semantic-ui-react'
import ballotBox from '../BallotIcon.svg'

export default class Profile extends Component {

    handleDeleteUser = () => {
        fetch(`http://localhost:3000/users/${this.props.currentUser.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    localStorage.clear()
    this.props.history.push('/login')  
    }

    backToMap = (e) => {
        e.preventDefault()
        this.props.history.push('/home')
    }

    logoutClicked = (e) => {
        e.preventDefault()
        
        this.props.handleLogout()
        this.props.history.push('/login')
    }

    render() {
        console.log(this.props.currentUser.name);
        
        return (
            <div>
                <Segment clearing>
                    <Header as='h3' onClick={this.backToMap} style={{cursor: 'pointer'}} floated='left'>
                        <img src={ballotBox} alt="Ballot Box Icon"  style={{height: '40px', width: '40px'}}/>
                        Poll Check
                    </Header>
                    <Header floated='right'>
                        <Breadcrumb ><h4>logout</h4></Breadcrumb>
                    </Header>
                </Segment>
               <h1> {this.props.currentUser.name} </h1>

                <Form style={{margin: '10px'}} onSubmit={this.props.handleEditSubmit}>
                    <Form.Input
                        label="name"
                        type="text" 
                        name="editName"
                        placeholder={this.props.currentUser.name}
                        value={this.props.editName}
                        onChange={this.props.handleEditChange}
                    />
                    <Form.Input
                        label="email"
                        type="text" 
                        name="editEmail"
                        placeholder={this.props.currentUser.email} 
                        value={this.props.editEmail}
                        onChange={this.props.handleEditChange}
                    />
                    <Form.Input
                        label="password"
                        type="password" 
                        name="editPassword" 
                        placeholder='****' 
                        value={this.props.editPassword}
                        onChange={this.props.handleEditChange}
                    />
                    <Form.Button style={{margin: '10px'}} content="update account" type="submit" value="sign Up"/>
                    <Form.Button style={{margin: '10px'}} content="delete account" value="delete account"
                        onClick={this.handleDeleteUser}/>
                </Form> 
            </div>
        )
    }
}


