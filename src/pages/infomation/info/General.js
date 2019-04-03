import React from 'react';
import SlideButton from '../../../components/slideButton/SlideButton';
import './info.less'

import { Route ,Redirect,Switch} from 'react-router-dom'
const navList = [
    { title: '基本情况', path: '/basic' },
    { title: '指名报备', path: '/marks' },
    { title: '经营关系', path: '/management' },
    { title: '历史交易', path: '/history' },
    { title: '行业信息', path: '/industry' },
    { title: '舆情信息', path: '/sentiment' },
    { title: '关系查询', path: '/relation' },
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
                        <Redirect to='/info/general/basic'/>
                    </Switch>
                </div>

            </div>
        )
    }
}