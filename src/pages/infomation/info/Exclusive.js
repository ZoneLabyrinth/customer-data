import React from 'react';
import SlideButton from '../../../components/slideButton/SlideButton';
import './info.less'

import { Route, Redirect, Switch } from 'react-router-dom'
const navList = [
    { title: '基本信息', path: '/basic' },
    { title: '基本情况', path: '/marks' },
    { title: '关系', path: '/management' },
    { title: '历史信息', path: '/history' },
    { title: '工业信息', path: '/industry' },
    { title: '舆情', path: '/sentiment' },
    { title: '查询', path: '/relation' },
]


export default class Exclusive extends React.Component {

    render() {
        return (
            <div>
                <SlideButton navList={navList} />
                <div className="container-body">
                    <Switch>
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
                        <Redirect to='/info/exclusive/basic' />
                    </Switch>
                </div>

            </div>
        )
    }
}