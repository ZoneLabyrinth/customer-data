import React from 'react'
import './general.less'
import { WhiteSpace, Tabs } from 'antd-mobile';
import { CSSTransition } from 'react-transition-group';
import Api from '@/api/api'
import _ from 'lodash'
import ScreenFull from '@/components/screenFull/ScreenFull'
import { connect } from 'react-redux';
import { imgList } from '@/store/actions'

const mapStateToProps = (state) => ({
    imgList: state.imgList
})


const tabs = [
    { title: '地区' },
    { title: '企业馆' },
    { title: 'IDC' },
    { title: '产品' },
    { title: '方法' },
    { title: '接待' },
    { title: '专家' },
];


//替换tabBar
function renderTabBar(props) {
    return (
        <div className='sidebar'>
            <div className="tabs-wrapper">
                <Tabs.DefaultTabBar {...props} page={10} />
            </div>

        </div>
    )
}


/**
 * 
 * @param {string} title 标题
 * @param {array} content 内容页签
 */
function preview(info, _this) {
    const data = _this.state[info.state]
    return (
        <div>
            <div className="title">
                <span>{info.title}预约</span>
                <span></span>
                <span><i className="iconfont icon-jiantouarrow487"></i></span>
            </div>
            {info.text.length > 0 &&
                <div className="text-intro">
                    <h1>{info.title}介绍</h1>
                    <div className="text-content">
                        {data.root &&
                            info.text.map((item, index) =>
                                <p key={index}>
                                    <span>{item.name}</span>
                                    <span></span>
                                    <span><a href={data.root[index].url}>在线预览</a></span>
                                </p>
                            )
                        }
                    </div>
                </div>}
            {info.pic.length > 0 &&
                <div className='pic-intro'>
                    <h1>{info.title}图片</h1>
                    <div className="pic-content">
                        {info.pic.length > 0 &&
                            info.pic.map((item, index) =>
                                data[item.code] &&
                                <div key={index}>
                                    <div onClick={_this.handlerClick.bind(_this, data[item.code])}>
                                        <img src={data[item.code][0].url} />
                                    </div>
                                    <p>{item.name}</p>

                                </div>

                            )
                        }
                    </div>
                </div>
            }

            {info.vid.length > 0 &&
                <div className='pic-intro'>
                    <h1>{info.title}视频</h1>
                    <div className="vid-content">
                        {info.vid.length > 0 &&
                            info.vid.map((item, index) =>
                                data[item.code] &&
                                <div key={index}>
                                    <div>
                                        <video src={data[item.code][index].url} controls="controls"></video>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    )
}

//产品
function productScheme(_this) {
    const list = [
        { title: '全部', code: '' },
        { title: '产品介绍', code: '' },
        { title: 'U888888', code: '' },
        { title: '通信服务', code: '' },
        { title: '人力服务', code: '' },
        { title: '协同服务', code: '' },
        { title: '制造服务', code: '' },
        { title: '财务服务', code: '' },
        { title: '营销服务', code: '' },
        { title: '采购服务', code: '' },
        { title: '数据服务', code: '' },
        { title: '税务服务', code: '' },
        { title: '工程服务', code: '' },
        { title: '平台服务', code: '' },
    ]
    return (
        <div>
            <CSSTransition in={_this.state.show} timeout={200} classNames="my-node">
                <div className="scheme">
                    <ul onClick={_this.clickItem.bind(_this)}>
                        {list.map((item, index) =>
                            <li key={index}>{item.title}</li>
                        )}
                    </ul>
                    <span onClick={() => _this.setState({ show: !_this.state.show })}>
                        △
                    </span>
                </div>
            </CSSTransition>
            <div className="scheme-content">
                <div className="pdf-card">
                    <span className="img"></span>
                    <p>
                        <span>北京市介绍</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


//方法
function bidMethod(data) {
    return (
        data.length > 0 &&
        data.map((item, index) => {
            return (
                <div className="bid-container">
                    <p>
                        <span>{item.name}</span>
                        <span></span>
                        <a href={item.url}>在线浏览</a></p>
                </div>
            )
        }

        )
    )
}



class Strategy extends React.Component {

    state = {
        tabIndex: 0,
        show: false,
        Ipark: {},
        digital: {},
        idc: {},
        bid: {},
        showImg: false,
        imgFull: false,
        imgUrl: '',
        //缓存上次点击节点
        item:{}
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {

        let Ipark = await Api.getIpark()
        let digital = await Api.getDigital()
        let idc = await Api.getIdc()
        let bid = await Api.getBid()

        for (var key in Ipark) {
            Ipark[key] = _.sortBy(Ipark[key], (item) => item.seq)
        }
        for (var key in digital) {
            digital[key] = _.sortBy(digital[key], (item) => item.seq)
        }
        for (var key in idc) {
            idc[key] = _.sortBy(idc[key], (item) => item.seq)
        }

        for (var key in bid) {
            bid[key] = _.sortBy(bid[key], (item) => item.seq)
        }

        this.setState({
            Ipark,
            digital,
            idc,
            bid: bid.root
        })
    }




    clickItem(e){
        if(this.state.item.style){
            this.state.item.style.color = 'black'
        }
        this.setState(
            {item:e.target}
        )
        // e.currentTarget.childNode.style.color = 'black'
        e.target.style.color = '#e14c46'
        
    }

    /**
     * 
     * @param {传入img列表} list 
     */
    handlerClick(list) {
        this.setState({
            showImg: true
        })
        // console.log(list)
        this.props.dispatch(imgList(list))

    }
    //退出页面
    exit() {
        this.setState({
            showImg: false
        })
    }

    //单张图片点击
    imgClick(e) {
        let url = e.target.src;
        if (url) {
            this.setState(
                {
                    imgFull: true,
                    imgUrl: e.target.src
                },
            )
        }

    }
    exitImg() {
        this.setState(
            {
                imgFull: false
            },
        )
    }

    render() {
        const yonyouPark = {
            state: 'Ipark',
            title: '北京地区',
            text: [
                { name: '园区介绍', code: '' },
                { name: '北京', code: '' },
                { name: '南昌', code: '' },
                { name: '三亚', code: '' },
            ],
            pic: [
                { name: '北京', code: 'bjyqtp' },
                { name: '南昌', code: 'ncyqtp' },
                { name: '三亚', code: 'syyqtp' },
            ],
            vid: [
                { name: '北京', code: 'spjs' },
                { name: '南昌', code: 'spjs' },
                // { name: '三亚', code: 'spjs' },
            ]
        }
        const digital = {
            state: 'digital',
            title: '山东地区',
            text: [
                { name: '简介', code: '' },
                { name: '解说词', code: '' },
                // { name: '人力云解说词', code: '' },
            ],
            pic: [],
            vid: [
                { name: '制造管', code: 'cgjjsp' },
                { name: '采购', code: 'cgjjsp' },
                { name: '财务馆', code: 'cgjjsp' },
                { name: '制造馆', code: 'cgjjsp' },
            ]
        }
        const Idc = {
            state: 'idc',
            title: 'IDC',
            text: [
                // { name: '简介', code: '' },
            ],
            pic: [
                { name: 'IDC', code: 'IDCzs' }
            ],
            vid: []
        }


        return (
            <div className="strategy-container">
                <div style={{ height: '100%' }}>
                    <Tabs tabs={tabs}
                        // initalPage={'t2'}
                        tabBarPosition="left"
                        tabDirection="vertical"
                        tabBarUnderlineStyle={{ right: 'auto' }}
                        tabBarBackgroundColor='#F8F8F8'
                        tabBarInactiveTextColor="#999"
                        renderTabBar={(props) =>
                            <div className='sidebar' style={{ zIndex: this.state.tabIndex === 3 ? 99 : 0 }}>
                                <div className="tabs-wrapper">
                                    <Tabs.DefaultTabBar {...props} page={10} />
                                </div>
                            </div>
                        }
                        onTabClick={(tab, index) => {
                            this.setState({
                                tabIndex: index,
                                show:true
                            })
                        }}


                    >
                        <div className="content-container">
                            {/* {titleNav('用友预约')} */}
                            {this.state.tabIndex === 0 &&
                                preview(yonyouPark, this)}
                        </div>
                        <div className="content-container">
                            {this.state.tabIndex === 1 &&
                                preview(digital, this)}
                        </div>
                        <div className="content-container">
                            {this.state.tabIndex === 2 &&
                                preview(Idc, this)}
                        </div>
                        <div className="content-product">
                            {this.state.tabIndex === 3 &&
                                productScheme(this)
                            }
                        </div>
                        <div className="content-container" >
                            {this.state.tabIndex === 4 &&
                                bidMethod(this.state.bid)
                            }
                        </div>
                        <div className="content-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            敬请期待~
                        </div>
                        <div className="content-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            敬请期待~
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
                {/* 图片列表 */}
                <ScreenFull show={this.state.showImg} exit={this.exit.bind(this)}>
                    <div className="img-container" onClick={this.imgClick.bind(this)}>
                        {this.props.imgList &&
                            this.props.imgList.map((item, index) =>
                                <img key={index} src={item.url} />
                            )}
                    </div>
                </ScreenFull>

                {/* 单张图片 */}
                <ScreenFull show={this.state.imgFull} exit={this.exitImg.bind(this)}>
                    <div className="img-full">
                        <img src={this.state.imgUrl} />
                    </div>
                </ScreenFull>
            </div>

        )
    }
}


export default connect(mapStateToProps)(Strategy)