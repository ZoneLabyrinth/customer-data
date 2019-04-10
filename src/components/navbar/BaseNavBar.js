import React from 'react'
import { WhiteSpace, NavBar, Icon, Popover, SearchBar } from 'antd-mobile';
import { Route, Switch, Redirect } from 'react-router-dom';
import './BaseNavBar.less'
import router from '../../router/index';
import Api from '@/api/api'
import GetCustomer from '../../container/GetCustomer';
import { connect } from 'react-redux';
import { customerList } from '../../store/actions';
import { debounce } from '../../utils/utils';

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
//获取客户名称用于标题
const mapStateToProps = state =>({
    customer:state.customer
})


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

    onSelect = (opt) => {
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

    onChange = debounce((e) =>{
        this.getData()
    },1000)


    getData = async (value) => {
        let data = await Api.search(this.state.value);
        if (Array.isArray(data.data)) {
            this.props.dispatch(customerList(data.data));
        }
    };

    hanlderCancle() {
        this.setState({
            value:'',
            cancle: !this.state.cancle
        })
    }


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
                            onCancel={() => this.setState({ cancle: !this.state.cancle })}
                            showCancelButton
                            onChange={(value)=>{
                                this.setState({value});
                                this.onChange()
                            } }
                        />

                    }

                    {this.props.customer}
                </NavBar>
                <WhiteSpace size="sm" />
                {this.state.cancle &&
                    <div className="search-container">
                        <WhiteSpace size="lg" />
                        <div className="search-body">
                            {/* 传入子组件 */}
                            <GetCustomer hanlderCancle={this.hanlderCancle.bind(this)} />
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

export default BaseNavBar = connect(mapStateToProps)(BaseNavBar)