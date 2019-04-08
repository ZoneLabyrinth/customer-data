import React, { Component } from 'react';
import './App.css';
import BaseNavBar from './components/navbar/BaseNavBar'
import Api from '@/api/api'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import router from './router/index';
import Information from './pages/infomation/Infomation';
import Collect from './pages/collect/Collect';

const tabs = [
  { title: '专属信息', path: '/specail' },
  { title: '通用信息', path: '/common' }
];


class App extends Component {

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

export default App;
