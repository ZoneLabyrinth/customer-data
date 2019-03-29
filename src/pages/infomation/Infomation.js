import React from 'react';
import BaseNavBar from '../../components/navbar/BaseNavBar';
import BaseTabBar from '../../components/tabbar/BaseTabBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Tabs, WhiteSpace, NavBar, Icon, Popover, SearchBar } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';

const tabs = [
    { title: '专属信息', path: '/info/exclusive' },
    { title: '通用信息', path: '/info/general' }
];

export default class Information extends React.Component {

    componentDidMount() {
        console.log(this.props.history)
    }
    render() {
        return (
            <div>
                {/* <Router> */}
                    <BaseTabBar tabs={tabs} routes={this.props.routes}/>
                {/* </Router> */}
            </div>
        )
    }
}