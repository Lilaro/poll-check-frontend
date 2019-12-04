import React, {Component} from 'react'
import {Comment, CommentGroup, Card, Segment} from 'semantic-ui-react'

export class ChatList extends Component {

  // constructor(){
  //   super()
  //   this.scrollContainerRef = React.createRef()
  // }

  // componentDidUpdate() {
  //   // console.log("cdu in message-list")
  //   this.scrollContainerRef.current.scrollTop = 99999999999999999999
  // }
  
  render(){
    console.log(this.props.messages)
  return (
    // ref={this.scrollContainerRef} inside segment opening
    <Segment style={{overflow: 'auto', maxHeight: 600 }} >
          <CommentGroup>
            {
              this.props.selectedSite.messages !== undefined ?
            // this.props.selectedSite.messages.map(message =>
            
            this.props.messages.map(message => 
              <div>
            <Comment>
              <Comment.Avatar src="https://image.flaticon.com/icons/svg/126/126486.svg"/>
              <Comment.Content>
                <Comment.Author>{message.username}</Comment.Author>
                <Comment.Text>{message.content}</Comment.Text>
                <Comment.Action>reply</Comment.Action>
              </Comment.Content>
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