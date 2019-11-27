import React from 'react'

export default function ChatForm(props) {
    return (
        <div>
            <form>
                <input type="text" placeholder="send a message"
                onChange={props.handleChange}
                // onSubmit={props.handleSubmit}
                >
                </input>
            </form>
        </div>
    )
}
