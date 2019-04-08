import React from 'react';
import SlideButton from '../../../components/slideButton/SlideButton';
import './info.less'

import { Route ,Redirect,Switch} from 'react-router-dom'
const navList = [
    { title: '赢单策略', path: '/strategy' },
    { title: '机构分享', path: '/shareOrg' },
    { title: '产品演示', path: '/production' },
    { title: '公司动态', path: '/dynamic' },
    { title: '管理查询', path: '/managementSearch' }
]


export default class General extends React.Component {

    render() {
        return (
            <div>
                <SlideButton navList={navList}/>
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
                        <Redirect to='/info/general/strategy'/>
                    </Switch>
                </div>

            </div>
        )
    }
}