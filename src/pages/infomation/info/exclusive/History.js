import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer'
import { DatePicker, Tabs } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';
import BaseCard from '../../../../components/baseCard/BaseCard';
import CardTabs from '../../../../components/cardTabs/CardTabs';

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
    { title: '合同应收' },
    { title: '合同信息' },
    { title: '订货信息' },
    { title: '出货信息' },
    { title: '在用产品' },
];

// 标签页内容
const data = [
    { title: '北京同仁堂', value: '北京同仁堂' },
    { title: '曾用名', value: '' },
    { title: '简称', value: '' },
    { title: '英文名', value: '' },
    { title: '社会统一信用代码', value: '' },
    { title: '企业注册号', value: '' },
    { title: '纳税人识别号', value: '' },
    // {title:'',value:''},
]


export default class History extends React.Component {

    state = {
        date: now,
        time: now,
        // utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: true,
    }


    render() {
        return (
            <div className="history-container">
                <CardContainer>
                    <ul className="time-container">
                        <li className="last-time">
                            <div><i className="iconfont icon-time" style={{ color: '#E5645F' }}></i> 最近一次签约时间</div>
                            {/* <span> */}
                            <DatePicker
                                mode="date"
                                title="选择日期"
                                extra="Optional"
                                format={val => `${formatDate(val)}`}
                                value={this.state.date}
                                onChange={date => this.setState({ date })}
                                className="date-picker"
                            >
                                <CustomChildren>
                                    {/* <span><i className="iconfont icon-time"></i>最近一次签约时间</span> */}
                                </CustomChildren>
                            </DatePicker>
                            {/* </span> */}
                        </li>
                        <li>
                            <div><i className="iconfont icon-qian" style={{ color: '#FFBC3B' }}></i> 最近三年合同签约总额</div>
                            <div>163,468</div>
                        </li>
                        <li>
                            <div><i className="iconfont icon-lvzhou_diaoxiancishu_cishu" style={{ color: '#00D0B8' }}></i> 最近三年签约次数</div>
                            <div>21</div>
                        </li>
                    </ul>
                </CardContainer>
                <CardTabs
                    tabs={tabs}
                    left={<BaseCard data={data} />}
                    center={<BaseCard data={data} />}
                    right={<BaseCard data={data} />}
                />

            </div>
        )
    }
}
