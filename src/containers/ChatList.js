import React, {Component} from 'react'
import {Comment, CommentGroup, Segment} from 'semantic-ui-react'

export class ChatList extends Component {

  //Try to implement scroll-to-top with scrollContainerRef again?
  render(){
    return (
    <Segment style={{overflowY: 'scroll', height: 520 }}  >
          <CommentGroup>
            {this.props.selectedSite.messages !== undefined ?
            
            this.props.messages.map(message => 
              <div key={message.id}>
            <Comment margin='10px'>
              <Comment.Avatar src="https://image.flaticon.com/icons/svg/126/126486.svg"/>
              <Comment.Content>
                <Comment.Author>{message.username}</Comment.Author>
                <Comment.Metadata >
                    <div>{message.created_at.split("T")[0]}</div>
                </Comment.Metadata>
                <Comment.Text>{message.content}</Comment.Text>
                {/* <Comment.Action onClick={this.handleReplyClick}>reply</Comment.Action> */}
              </Comment.Content>
            {/* <Button size='mini'>Respond</Button> */}
            </Comment>
            </div>
            )
            :
            null
          }
            
          </CommentGroup>
        </Segment>
        
        )
    }
  }

  export default ChatList

    // const filteredMessages = () => {
    //   return this.props.selectedSite.messages.filter(message => message.poll_site_id === this.props.selectedSite.id)
    // }
                // constructor(){
                //   super()
                //   this.scrollContainerRef = React.createRef()
                // }
              
                // componentDidMount() {
                //   // this.scrollContainerRef.current.scrollTop = 99999999999999999999
                //   console.log('cdm in chatlist');
                  
                // }
                
              
                // componentDidUpdate() {
                //   // console.log("cdu in message-list")
                //   this.scrollContainerRef.current.scrollTop = 1000
                // }