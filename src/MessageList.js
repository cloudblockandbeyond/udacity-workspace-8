import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired, 
        messages: PropTypes.array.isRequired
    };

    render() {
        const { username, messages } = this.props;

        return(
            <div>
                <ul className="message-list">
                    { messages.map( (message, index) => (
                        <Message key={ index } message={ message } username={ username } />
                    ) ) }
                </ul>
            </div>
        );
    }
}

export default MessageList;
