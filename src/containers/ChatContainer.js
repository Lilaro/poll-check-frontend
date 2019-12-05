import React, { Component } from 'react';
import ChatList from './ChatList';
import ChatForm from '../components/ChatForm'
import {withRouter, Route} from 'react-router'
import {Grid, Header, Segment} from 'semantic-ui-react';
import ballotBox from '../BallotIcon.svg'

export class ChatContainer extends Component {


    
    // componentDidMount(){
    //     setTimeout(this.props.maintainSelectedSite(), 10)
        
    // }

    render() {
        console.log('current user', this.props.currentUser.id)
        console.log('selectedSite', this.props.selectedSite)
        console.log('channel', this.props.channel.id)
   
        return (
            <>
                {/* <Segment clearing>
                    <Header as='h1' floated='left'>
                    <img src={ballotBox} alt="Ballot Box Icon"/> Poll Check
                    <Header/>
                    <Header as='h4' floated='right'>
                    {this.props.selectedSite.site_name}
                    <Header/> 
                </Segment> */}
                 <Segment clearing height='60px'>
                    <Header as='h5' floated='left'>
                     {this.props.selectedSite.site_name}
                    </Header>
                     <Header as='h4' floated='right'>
                        <img src={ballotBox} alt="Ballot Box Icon"/>
                         Poll Check
                     </Header>
                </Segment>
                <Segment width='1000px'>
                <ChatList 
                    selectedSite={this.props.selectedSite}
                    messages={this.props.messages} />
                <ChatForm newMessage={this.props.newMessage}
                    handleChange={this.handleChange}
                    submitMessage={this.props.submitMessage}
                    messageChange={this.props.messageChange}
                ></ChatForm>
                </Segment>
           </>
  
        )
    }
}

export default withRouter(ChatContainer)
