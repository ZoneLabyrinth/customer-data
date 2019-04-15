import React from 'react';
import BaseTabBar from '../../components/tabbar/BaseTabBar';
import {Route} from 'react-router-dom'

const tabs = [
    { title: '客户收藏', path: '/collection/collect' },
    { title: '意见反馈', path: '/collection/feedback' },
    { title: '分享', path: '/collection/share' }
  ];

export default class Collect extends React.Component{


    render(){
        return(
            <div>
                <BaseTabBar tabs={tabs} routes={this.props.routes}/>
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