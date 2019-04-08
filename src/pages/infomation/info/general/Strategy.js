import React from 'react'
import './general.less'
import { WhiteSpace, Tabs, Button } from 'antd-mobile';


const tabs = [
    { title: '用友产业园' },
    { title: '数字企业馆' },
    { title: '用友IDC' },
    { title: '行业卖点' },
    { title: '打单方法' },
    { title: '高管接待' },
    { title: '专家接待' },
];



//替换tabBar
function renderTabBar(props) {
    return (
        <div className='sidebar'>
            <div className="tabs-wrapper">
                <Tabs.DefaultTabBar {...props} page={47} />
            </div>

        </div>
    )
}

//标题
function titleNav(name) {
    return (
        <div className="title">
            <span>{name}</span>
            <span></span>
            <span><i className="iconfont icon-jiantouarrow487"></i></span>
        </div>
    )
}

/**
 * 
 * @param {string} title 标题
 * @param {array} content 内容页签
 */
function preview(title, content) {
    return (
        <div>
            <div className="title">
                <span>{title}预约</span>
                <span></span>
                <span><i className="iconfont icon-jiantouarrow487"></i></span>
            </div>
            <div className="text-intro">
                <h1>{title}介绍</h1>
                <div className="text-content">
                    {content.length > 0 &&
                        content.map((item, index) =>
                            <p key={index}>
                                <span>{item.name}</span>
                                <span></span>
                                <span><Button>在线预览</Button></span>
                            </p>
                        )
                    }
                </div>
            </div>
            <div className='pic-intro'>
                <h1>{ title }图片</h1>
                <div className="pic-content">
                    {content.length > 0 &&
                        content.map((item, index) =>
                            <div key={index}>
                                <div></div>
                                <p>{item.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='pic-intro'>
                <h1>{ title }视频</h1>
                <div className="pic-content">
                    {content.length > 0 &&
                        content.map((item, index) =>
                            <div key={index}>
                                <div></div>
                                <p>{item.name}</p>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

function mediaShow(title, content) {
    return (

        <div className='pic-intro'>
            <h1>{{ title }}图片</h1>
            <div className="pic-content">
                {content.length > 0 &&
                    content.map((item, index) =>
                        <div>
                            <div></div>
                            <p>{item.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}






export default class Strategy extends React.Component {


    componentDidMount() {

    }




    render() {

        const chanyeyuan = [
            { name: '北京产业园', url: '' },
            { name: '南昌产业园', url: '' },
            { name: '三亚产业园', url: '' },

        ]

        return (
            <div className="strategy-container">
                <div style={{ height: '100%' }}>
                    <Tabs tabs={tabs}
                        initalPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        tabBarUnderlineStyle={{ right: 'auto' }}
                        tabBarBackgroundColor='#F8F8F8'
                        tabBarInactiveTextColor="#999"
                        renderTabBar={renderTabBar}

                    >
                        <div className="content-container">
                            {/* {titleNav('用友产业园预约')} */}
                            {preview('用友产业园', chanyeyuan)}
                        </div>
                        <div className="content-container">
                            {titleNav('数字企业馆预约')}
                        </div>
                        <div className="content-container">
                            {titleNav('用友IDC预约')}
                        </div>
                        <div className="content-container">
                            {titleNav('用友产业园预约')}
                        </div>
                        <div className="content-container">
                            {titleNav('用友产业园预约')}
                        </div>
                        <div className="content-container">
                            {titleNav('用友产业园预约')}
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>

            </div>

        )
    }
}
