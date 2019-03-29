
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import { Tabs, WhiteSpace, NavBar, Icon, Popover, SearchBar } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import PropTypes from 'prop-types'
import './BaseTabBar.less'



export default class BaseTabBar extends React.Component {

    static propTypes = {
        tabs: PropTypes.array.isRequired,
    }


    render() {
        return (
            <div>
                <StickyContainer>
                    <Tabs tabs={this.props.tabs}
                        tabBarInactiveTextColor="#666666"
                        renderTab={tab => <Link to={tab.path}>{tab.title}</Link>}
                        tabBarTextStyle={{ textAlign: 'center', paddingTop: '8px' }}
                    >
                    </Tabs>
                </StickyContainer>
                <WhiteSpace />


            </div>
        )
    }

}