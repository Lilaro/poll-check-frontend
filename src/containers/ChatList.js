import React, { Component } from 'react'
import {Comment, CommentGroup, Card} from 'semantic-ui-react'

export class ChatList extends Component {


    render() {
      console.log('props from clist', this.props.selectedSite.messages)
        return (

          <Card>
            <CommentGroup>
              {
              this.props.selectedSite.messages !== undefined ?
              this.props.selectedSite.messages.map(message =>
              <Comment>
                <Comment.Avatar src="https://image.flaticon.com/icons/svg/126/126486.svg"/>
                <Comment.Content>
                  <Comment.Author>{message.user_id}</Comment.Author>
                  <Comment.Text>{message.content}</Comment.Text>
                  <Comment.Action>reply</Comment.Action>
                </Comment.Content>
              </Comment>
              )
                :
                null
            }
              
            </CommentGroup>
          </Card>
         
        )
    }
}

export default ChatList
