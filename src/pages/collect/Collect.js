import React from 'react';
import BaseTabBar from '../../components/tabbar/BaseTabBar';

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
            
            </div>
        )
    }
}