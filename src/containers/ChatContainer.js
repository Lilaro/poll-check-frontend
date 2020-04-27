import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatForm from '../components/ChatForm'
import {withRouter} from 'react-router'
import {Breadcrumb, Header, Segment} from 'semantic-ui-react';
import ballotBox from '../BallotIcon.svg'

export class ChatContainer extends Component {

    logoutClicked = (e) => {
        e.preventDefault()
        
        this.props.handleLogout()
        this.props.history.push('/login')
    }
    
    profileClicked = (e) => {
        e.preventDefault()
        this.props.history.push('/profile')
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
        console.log('current user', this.props.currentUser.id)
        console.log('selectedSite', this.props.selectedSite)
        console.log('channel', this.props.channel.id)
   
        return (
            <>
                <Segment clearing>
                    <Header floated='left' onClick={this.backToMap} style={{cursor: 'pointer'}}>
                        <img src={ballotBox} alt="Ballot Box Icon" style={{height: '40px', width: '40px'}}/>
                         Poll Check
                    </Header>
                    <Header floated='right'>
                        {this.props.selectedSite.site_name}
                    <Breadcrumb>
                        <Breadcrumb.Section link onClick={this.profileClicked}><h4>my account</h4></Breadcrumb.Section>
                        <Breadcrumb.Divider>/</Breadcrumb.Divider>
                        <Breadcrumb.Section link onClick={this.logoutClicked}><h4>logout</h4></Breadcrumb.Section>
                    </Breadcrumb> 
                    </Header> 
                </Segment>
                <Segment color='black' width='1000px'>
                    <ChatList 
                        selectedSite={this.props.selectedSite}
                        messages={this.props.messages} />
                    <ChatForm newMessage={this.props.newMessage}
                        handleChange={this.handleChange}
                        submitMessage={this.props.submitMessage}
                        messageChange={this.props.messageChange}>
                    </ChatForm>
                </Segment>
           </>
  
        )
    }
}

export default withRouter(ChatContainer)
