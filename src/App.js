import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [], 
      messages: []
    };
  }

  componentDidMount() {
    this.setState((currentState) => ({
      users: [{ username: 'Amy' }, { username: 'John' }]
    }));
  }

  handleAddMessage = (message) => {
    this.setState((currentState) => ({
      messages: [...currentState.messages, message]
    }));
  }

  render() {
    return(
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>

        <div className="container">
          { this.state.users.map( (user, index) => (
            <ChatWindow key={ index } user={ user } messages={ this.state.messages }
              onAddMessage={ this.handleAddMessage } />
          ) ) }
        </div>

      </div>
    );
  }
}

export default App;
