import React from 'react'
import CardContainer from '../../../../components/cardContainer/CardContainer';
import BaseCard from '../../../../components/baseCard/BaseCard';
import CardTabs from '../../../../components/cardTabs/CardTabs';
import ArticleCard from '@/components/articleCard/ArticleCard'

//标签标题
const tabs = [
    { title: '经营情况' },
    { title: '客户新闻' },
    { title: '行业新闻' },
];

// 标签页内容
const data = [
    { title: '董事长', value: '北京同仁堂' },
    { title: '总经理', value: '' },
    { title: '副总经理', value: '' },
    { title: '总收入', value: '' },
    { title: '净利润', value: '' },
    { title: '收入增长率', value: '' },
    { title: '利润增长率', value: '' },
    {title:'收入构成',value:''},
    {title:'毛利率',value:''},
    {title:'净利率',value:''},
    {title:'负债率',value:''},
    {title:'经营评述',value:''},
]


function article(data) {
    return (
        data.map((item, index) => <ArticleCard key={index} data={item} />)
    )
}

const content = [
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' },
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' },
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' },
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' }
]


export default class Sentiment extends React.Component{
    render(){
        return(
            <div>
                    <CardTabs
                        tabs={tabs}
                        left={<BaseCard data={data} />}
                        center={article(content)}
                        right={article(content)}
                    />
                
            </div>
        )
    }
}
