import React, { Component } from 'react'
import {Form, Header, Segment} from 'semantic-ui-react'
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

    render() {
        console.log(this.props.currentUser);
        
        return (
            <div>
                <Segment clearing>
                    <Header as='h3' onClick={this.backToMap} style={{cursor: 'pointer'}}>
                        <img src={ballotBox} alt="Ballot Box Icon"  style={{height: '40px', width: '40px'}}/>
                        Poll Check
                    </Header>
                </Segment>
               <h1> {this.props.currentUser.name} </h1>
                {this.props.currentUser.email}

                <Form style={{margin: '10px'}} onSubmit={this.props.handleEditSubmit}>
                        <Form.Input 
                            type="text" 
                            name="editName"
                            placeholder='Name' 
                            value={this.props.editName}
                            onChange={this.props.handleEditChange}
                        />
                        <Form.Input 
                            type="text" 
                            name="editEmail" 
                            placeholder='Email' 
                            value={this.props.editEmail}
                            onChange={this.props.handleEditChange}
                        />
                        <Form.Input 
                            type="password" 
                            name="editPassword" 
                            placeholder='Password' 
                            value={this.props.editPassword}
                            onChange={this.props.handleEditChange}
                        />
                    <Form.Button style={{margin: '10px'}} content="update account" type="submit" value="sign Up"/>
                    <Form.Button style={{margin: '10px'}} content="delete account" value="delete account"
                        onClick={this.handleDeleteUser}/>
                </Form> 
                {/* <Form>
                </Form> */}
            </div>
        )
    }
}


