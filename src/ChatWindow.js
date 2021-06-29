import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewMessage from './NewMessage';
import MessageList from './MessageList';

class ChatWindow extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired, 
        messages: PropTypes.array.isRequired, 
        onAddMessage: PropTypes.func.isRequired
    };

    handleNewMessage = (message) => {
        this.props.onAddMessage(message);
    };

    render() {
        const { user, messages } = this.props;

        return(
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{ user.username }</div>
                <MessageList username={ user.username } messages={ messages } />
                <NewMessage username= { user.username } onNewMessage={ this.handleNewMessage } />
            </div>
        );
    }
}

export default ChatWindow;
