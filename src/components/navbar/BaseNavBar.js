import React from 'react'
import { WhiteSpace, NavBar, Icon, Popover, SearchBar } from 'antd-mobile';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './BaseNavBar.less'
import router from '../../router/index';
import Api from '@/api/api'

const Item = Popover.Item;
const myIcon = icon => <i className={`iconfont ${icon}`}></i>;


//菜单栏
function collectMenu(_this) {
    return (
        <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={_this.state.visible}
            overlay={[
                (<Item key="8" value="scan" icon={myIcon('icon-star')}><a href='/collection/collect'>客户收藏</a></Item>),
                (<Item key="9" value="special" icon={myIcon('icon-yijianfankui')}><a href='/collection/feedback'>意见反馈</a></Item>),
                (<Item key="10" value="button ct" icon={myIcon('icon-fenxiang')}>
                    <a href='/collection/share'>机构分享</a>
                </Item>),
            ]
            }
            align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [-10, -10],
            }}
            overlayClassName="overlay"
            onVisibleChange={_this.handleVisibleChange}
            onSelect={_this.onSelect}
        >
            <div style={{
                height: '100%',
                padding: '0 0 0 15px',
                display: 'flex',
                marginRight: '10px',
                alignItems: 'center'
            }}
            >
                <Icon key="11" type='ellipsis' size="lg" color="#666" />
            </div>
        </Popover>
    )
}

class BaseNavBar extends React.Component {
    state = {
        cancle: false, // 搜索框
        data: [],
        visible: false,
        selected: '',
        star: false,
        stars: true
    }
    search() {
        this.setState({ cancle: !this.state.cancle })
    }

    //搜索事件
    handlerSearch(item) {
        this.props.history.push(`/info/exclusive/basic?customer=${item}`)
        this.setState({ cancle: false })
        

    }
    // 菜单事件
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };

    onChange = async (value) => {
        this.setState({ value });
        let data = await Api.search(value);
        this.setState({
            data: data.data
        })
    };


    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    rightContent={[
                        //TODO 通用信息时不显示搜索
                        <Icon key="20" type='search' onClick={this.search.bind(this)} size="lg" color="#666" />,
                        collectMenu(this)
                    ]}
                >

                    {this.state.cancle &&
                        <SearchBar
                            value={this.state.value}
                            placeholder="搜索"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => this.setState({ cancle: !this.state.cancle })}
                            showCancelButton
                            onChange={this.onChange}
                        />

                    }
                    北京同仁堂
                </NavBar>
                <WhiteSpace size="sm" />
                {this.state.cancle &&
                    <div className="search-container">
                        <WhiteSpace size="lg" />
                        <div className="search-body">
                            {
                                this.state.data &&
                                this.state.data.map((item, index) => {
                                    return (
                                        <div className="search-list" key={index} onClick={this.handlerSearch.bind(this, item)}>
                                            <span>{item}</span>
                                            <span><i className={`iconfont ${this.state.star ? 'icon-star1' : 'icon-star'}`}></i></span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                }

                <Switch>
                    {
                        router.map((route, index) => {
                            if (route.exact) {
                                return <Route key={index} exact path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                />
                            } else {
                                return <Route key={index} path={route.path}
                                    render={props => (
                                        <route.component {...props} routes={route.routes} />
                                    )}
                                />
                            }
                        })
                    }
                    <Redirect from='/' to='/info/exclusive' />
                </Switch>
            </div>
        );
    }
}

export default BaseNavBar = withRouter(BaseNavBar)