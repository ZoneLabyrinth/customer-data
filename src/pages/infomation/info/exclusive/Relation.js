import React from 'react'
import {Button, WhiteSpace} from 'antd-mobile'
import BaseList from '@/components/baseList/BaseList'
import CardContainer from '../../../../components/cardContainer/CardContainer';



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


export default class Relation extends React.Component{
    render(){
        return(
            <div className="relation-container">
                <CardContainer>
                    <div className='search-relation'>
                        <h4>请输入管理企业名称</h4>
                        <form>
                            <input placeholder='请输入公司名称'/>
                            <p><i className="iconfont icon-lianjie"></i></p>
                            <input placeholder='请输入公司名称' />
                            <WhiteSpace size='lg' /><WhiteSpace size='lg' />
                            <Button type="primary" loading  className="button">查询</Button> 
                        </form>
                    </div>

                </CardContainer>

                <CardContainer style={{padding:0}}>
                    <BaseList titleList={title} dataList={data} />



                </CardContainer>


            </div>
        )
    }
}
