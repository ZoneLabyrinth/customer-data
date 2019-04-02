import React from 'react'
import './exclusive.less'
import question from '@/assets/img/question.png'
import BaseList from '@/components/baseList/BaseList'
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




export default class Management extends React.Component{
    render(){
        return(
            <div className="management">
                <div className="mg-title">
                    <p>
                        <img src={question} />&nbsp;
                        说明：仅显示与客户有股权关系且属于公司老客户或指名宝贝客户的企业。
                    </p>   
                </div>
                <div className="list-container">
                    <BaseList titleList={title} dataList={data} />
                </div>
                
            </div>
        )
    }
}
