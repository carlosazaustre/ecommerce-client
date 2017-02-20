import React, { Component } from 'react';
import Header from './common/Header';

class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <main role="main">
        <Header />
        {this.props.children}
      </main>
    );
  }
}

export default App;
