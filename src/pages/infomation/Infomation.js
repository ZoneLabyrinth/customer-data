import React from 'react';
import BaseTabBar from '../../components/tabbar/BaseTabBar';
import {Route,Redirect } from 'react-router-dom'

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
                <BaseTabBar tabs={tabs}/>
                {
                        this.props.routes.map((route, key) => {
                            if (route.exact) {
                                return <Route key={key} exact path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                />
                            } else {
                                return <Route key={key} path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                />
                            }
                        })
                    }

            </div>
        )
    }
}