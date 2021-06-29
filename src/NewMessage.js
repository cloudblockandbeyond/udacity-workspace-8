import React, { Component } from 'react';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';

class NewMessage extends Component {
    static propTypes = { 
        username: PropTypes.string.isRequired, 
        onNewMessage: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            message: {
                text: ""
            }
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const content = serializeForm(event.target, { hash: true });

        const message = {
            username: this.props.username, 
            text: content.text
        };
        
        this.props.onNewMessage(message);

        this.setState((currentState) => ({
            message: {
                text: ""
            }
        }));
    };

    handleChange = (content) => {
        this.setState((currentState) => ({
            message: {
                text: content
            }
        }));
    };

    isDisabled = () => {
        return ( this.state.message.text === "" );
    };

    render() {
        return(
            <div>
                <form className="input-group" onSubmit={ (event) => { this.handleSubmit(event) } }>
                    <input type="text" className="form-control" placeholder="Enter your message..."
                        name="text" value={ this.state.message.text } onChange={ (event) => { this.handleChange(event.target.value) } } />
                    <div className="input-group-append">
                    <button className="btn submit-button" type="submit" disabled={ this.isDisabled() }>
                        SEND
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewMessage;
