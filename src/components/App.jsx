import React, { Component } from 'react';
import logo from '../media/logo.svg';
import styles from '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <p>Edit src/App.js and save to reload.</p>
          <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
}

export default App;
