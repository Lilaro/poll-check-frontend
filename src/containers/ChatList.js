import React, {Component} from 'react'
import {Comment, CommentGroup, Card, Segment} from 'semantic-ui-react'

export class ChatList extends Component {

  
  render(){
    console.log(this.props.messages)
    return (
    // ref={this.scrollContainerRef} inside segment opening
    <Segment style={{overflowY: 'scroll', height: 520 }}  >
          <CommentGroup>
            {this.props.selectedSite.messages !== undefined ?
            
            this.props.messages.map(message => 
              <div>
            <Comment margin='10px'>
              <Comment.Avatar src="https://image.flaticon.com/icons/svg/126/126486.svg"/>
              <Comment.Content>
                <Comment.Author d>{message.username}</Comment.Author>
                <Comment.Metadata >
                    <div>{message.created_at.split("T")[0]}</div>
                </Comment.Metadata>
                <Comment.Text>{message.content}</Comment.Text>
                {/* <Comment.Action onClick={this.handleReplyClick}>reply</Comment.Action> */}
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