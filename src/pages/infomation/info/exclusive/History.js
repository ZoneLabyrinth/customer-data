import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer'
import { DatePicker, Tabs } from 'antd-mobile'
import {  Sticky } from 'react-sticky';
import BaseCard from '@/components/baseCard/BaseCard';
import CardTabs from '@/components/cardTabs/CardTabs';
import { connect } from 'react-redux';
import  Api  from '@/api/api';
import { formatCash } from '@/utils/utils';


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

// Make sure that in `time` mode, the maxDate and minDate are within one day.
// let minDate = new Date(nowTimeStamp - 1e7);
// const maxDate = new Date(nowTimeStamp + 1e7);
// if (minDate.getDate() !== maxDate.getDate()) {
//     // set the minDate to the 0 of maxDate
//     minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
// }
function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}年${pad(date.getMonth() + 1)}月${pad(date.getDate())}日`;
    // const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr}`;
}
const CustomChildren = ({ extra, onClick, children }) => (
    <div
        onClick={onClick}
    >
        {/* {children} */}
        <span className="date-picker">{extra}</span>
    </div>
);


/**
 * 
 * @param {*} tabbar标签页 
 */

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}





//标签标题
const tabs = [
    { title: '应收' },
    { title: '信息' },
    { title: '发出' },
    { title: '收回' },
    { title: '使用' },
];

// 标签页内容
const rece = [
    { title: '名称', code: 'pk_contrecei' },
    { title: '日期', code: 'date' },
    { title: '金额', code: 'cont_all_signamount' },
    { title: '计划', code: 'cont_receipt_plan' },
    { title: '其中：收款', code: 'prod_receipt_plan' },
    { title: '实收', code: 'implement_receipt_plan' },
    { title: '开收', code: 'develop_receipt_plan' },
    { title: '已收款', code: 'cont_all_accreceipt' },
    { title: '应收款', code: 'cont_all_receivable' },
    { title: '其中：应收', code: 'prod_receivable' },
    { title: '实应', code: 'implement_receipt_plan' },
    { title: '开应', code: 'develop_receivable' },
    { title: '服务', code: 'service_receivable' },
]

const contract = [
    { title: '机构', code: 'branch_name' },
    { title: '日期', code: 'sign_date' },
    { title: '类型', code: 'cont_type' },
    { title: '金额', code: 'cont_amount' },
    { title: '产品', code: 'sign_product' },
    { title: '状态', code: 'project_status' },
]

const order = [
    { title: '机构', code: 'branch_name' },
    { title: '类型', code: 'busi_type' },
    { title: '时间', code: 'order_date' },
    { title: '金额', code: 'order_amount' },
    { title: '产品', code: 'order_product' }
]
const out = [
    { title: '机构', code: 'branch_name' },
    { title: '时间', code: 'out_date' },
    { title: '注册时间', code: 'reg_date' },
    { title: '回收', code: 'out_product' },

]

const product = [
    { title: '产品线', code: 'product_line' },
    { title: '食品', code: 'product_name' },
    { title: '版本', code: 'product_ver' },
    { title: '模块', code: 'product_module' }
]

const mapStateToProps = state =>({
    customer:state.customer
})

class History extends React.Component {

    
        // date: now,
        // time: now,
        // utcDate: utcNow,
        // dpValue: null,
        // customChildValue: null,

    state = {
        visible: true,
        mainIndex:{},
        rece:{},
        contract:{},
        order:{},
        product:{}
    }

    componentDidMount(){    
        this.getData()
    }

    getData = async ()=>{
        
        let id = this.props.customer.id;
        if(this.props.customer.id){

        }
        let mainIndex = await Api.getHistoryIndex(id);
        
        let rece = await Api.getHistoryRece(id);
        
        let contract = await Api.getHistoryContract(id);

        let order = await Api.getHistoryOrder(id);
        
        let out = await Api.getHistoryOut(id)

        let product = await Api.getHistoryProduct(id)

        this.setState({
            mainIndex,
            rece,
            contract,
            order,
            out,
            product
        })
        console.log(this.state)
    }


    render() {
        return (
            <div className="history-container">
                <CardContainer>
                    <ul className="time-container">
                        <li className="last-time">
                            <div><i className="iconfont icon-time" style={{ color: '#E5645F' }}></i> 最近一次时间</div>
                            <div>
                                {this.state.mainIndex.last_deal_date}
                            </div>
                            {/* <span> */}
                            {/* <DatePicker
                                mode="date"
                                title="选择日期"
                                extra="Optional"
                                format={val => `${formatDate(val)}`}
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                                className="date-picker"
                            > */}
                                {/* <CustomChildren> */}
                                    {/* <span><i className="iconfont icon-time"></i>最近一次签约时间</span> */}
                                {/* </CustomChildren> */}
                            {/* </DatePicker> */}
                            {/* </span> */}
                        </li>
                        <li>
                            <div><i className="iconfont icon-qian" style={{ color: '#FFBC3B' }}></i> 最近三年总额</div>
                            <div> {formatCash(this.state.mainIndex.last_deal_amount)}</div>
                        </li>
                        <li>
                            <div><i className="iconfont icon-lvzhou_diaoxiancishu_cishu" style={{ color: '#00D0B8' }}></i> 最近三年次数</div>
                            <div>{this.state.mainIndex.last_deal_number}</div>
                        </li>
                    </ul>
                </CardContainer>
                <CardTabs
                    tabs={tabs}
                    left={<BaseCard titles={rece} data={this.state.rece} />}
                    center={<BaseCard titles={contract} data={this.state.contract} />}
                    right={<BaseCard titles={order} data={this.state.order} />}
                    four={<BaseCard titles={out} data={this.state.out} />}
                    last={<BaseCard titles={product} data={this.state.product} />}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps)(History)