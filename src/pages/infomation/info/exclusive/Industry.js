import React from 'react'
import CardTabs from '@/components/cardTabs/CardTabs';
import ArticleCard from '@/components/articleCard/ArticleCard'
import BaseList from '@/components/baseList/BaseList';

const tabs = [
    { title: '行业标签' },
    { title: '行业投标' },
    { title: '行业样板' },
];
const title = [
    { name: '客户名称', code: 'cust' },
    { name: '股权关系', code: 'rela' },
    { name: '关系级次', code: 'cengji' },
    { name: '经营机构', code: 'jingying' },
    { name: '经营机构', code: 'jigou' },
    { name: '经营机构', code: 'mingcheng' },

]
const data = [
    [
        { cust: '客户名称' },
        { rela: '股权关系' },
        { cengji: '关系级次' },
        { jingying: '经营机构' },
        { jigou: '经营机构' },
        { mingcheng: '经营机构' },
        { xing: '经营机构' },
        { guquan: '经营机构' },
        { guanxi: '客户' },
    ]
]



function article(data) {
    return (
        data.map((item, index) => <ArticleCard key={index} icon data={item} />)
    )
}

const content = [
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' },
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' },
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' },
    { title: 'XXXXX药品公司ERP投标文件', content: '正规的招标书中会要求对标书的技术规范要求进行逐条应答，海域一些对招标项目的解释和澄清，所有这些内容都应逐条详细阅读并作出赢啊，因为用户的需求是完全从招标书中体现的，是否能真正把我用户需求连接清楚，标书是最直接的途径' }
]


export default class Industry extends React.Component {
    render() {
        return (
            <div>
                <CardTabs
                    indent
                    tabs={tabs}
                    left={article(content)}
                    center={<BaseList titleList={title} dataList={data} />}
                    right={<BaseList titleList={title} dataList={data} />}




                />
            </div>
        )
    }
}
