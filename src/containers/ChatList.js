import React from 'react'
import {Comment, CommentGroup, Card} from 'semantic-ui-react'

export function ChatList(props) {

  
  
  const filteredMessages = () => {
    return props.messages.filter(message => message.poll_site_id === props.selectedSite.id)
  }
 console.log(filteredMessages()[0])
  return (

          <Card>
            <CommentGroup>
              {
              // props.selectedSite.messages !== undefined ?
              // props.selectedSite.messages.map(message =>

              filteredMessages().map(message => 
                <div>
                {console.log(message.user)}
              <Comment>
                <Comment.Avatar src="https://image.flaticon.com/icons/svg/126/126486.svg"/>
                <Comment.Content>
                  <Comment.Author>{message.user.name}</Comment.Author>
                  <Comment.Text>{message.content}</Comment.Text>
                  <Comment.Action>reply</Comment.Action>
                </Comment.Content>
              </Comment>
              </div>
              )
              // )
                // :
                // null
            }
              
            </CommentGroup>
          </Card>
         
        )
}

export default ChatList
