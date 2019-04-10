import React, { Component } from 'react';
import './App.css';
import BaseNavBar from './components/navbar/BaseNavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import { getQueryString } from './utils/utils';
import { connect } from 'react-redux';
import { curCustomer } from './store/actions';

const tabs = [
  { title: '专属信息', path: '/specail' },
  { title: '通用信息', path: '/common' }
];


class App extends Component {

  componentDidMount(){
    let name = getQueryString('customer')
    if(name){
        this.props.dispatch(curCustomer(name))
    }
  }


  render() {
    return (
      <Router>
        <div className="App">
            <BaseNavBar/>
        </div>
      </Router>
    );
  }
}

export default App = connect()(App)
