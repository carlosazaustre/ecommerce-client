import React, { Component, PropTypes } from 'react';
// import { connect } from 'react-redux';
import Header from './common/Header';

class App extends Component {
  render () {
    return (
      <main role="main">
        <Header />
        {this.props.children}
      </main>
    );
  }
}

App.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default App;
