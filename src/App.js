import React, { Component } from 'react';
import './App.css';
import BaseNavBar from './components/navbar/BaseNavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import { getQueryString } from './utils/utils';
import { connect } from 'react-redux';
import { curCustomer } from './store/actions';

class App extends Component {

  componentDidMount() {
    let name = getQueryString('customer');
    let id = getQueryString('customerId')
    console.log(name,id)
    if (name && id) {
      this.props.dispatch(curCustomer({
        name,
        id
      }));
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
          <BaseNavBar />
        </div>
      </Router>
    );
  }
}

export default App = connect()(App)
