import React from 'react'
import CardTabs from '@/components/cardTabs/CardTabs';
import ArticleCard from '@/components/articleCard/ArticleCard'
import BaseList from '@/components/baseList/BaseList';

const tabs = [
    { title: '行业标签' },
    { title: '行业投标' },
    { title: '行业样板' },
];
const title =[
    {name:'客户名称',code:'cust'},
    {name:'股权关系', code:'rela'},
    {name:'关系级次', code:'cengji'},
    {name:'经营机构', code:'jingying'},
    {name:'经营机构', code:'jigou'},
    {name:'经营机构', code:'mingcheng'},

]
const data =[
    [
        {cust:'客户名称'},
        {rela:'股权关系'},
        {cengji:'关系级次'},
        {jingying:'经营机构'},
        {jigou:'经营机构'},
        {mingcheng:'经营机构'},
        {xing:'经营机构'},
        {guquan:'经营机构'},
        {guanxi:'客户'},
    ]
]


export default class Industry extends React.Component {
    render() {
        return (
            <div>
                <CardTabs 
                    indent
                    tabs={tabs}
                    left={<ArticleCard/>} 
                    center={<BaseList titleList={title} dataList={data} />} 
                    right={<BaseList titleList={title} dataList={data} />} 
                    
                    
                    
                    
                    />
            </div>
        )
    }
}
