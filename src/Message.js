import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    static propTypes = {
        message: PropTypes.object.isRequired, 
        username: PropTypes.string.isRequired
    };

    render() {
        const { message, username } = this.props;

        return(
            <div>
                <li className={ message.username === username ? "message sender" : "message recipient" }>
                    <p>
                        { `${message.username}: ${message.text}` }
                    </p>
                </li>
            </div>
        );
    }
}

export default Message;
