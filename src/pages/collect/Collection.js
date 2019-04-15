import  React from "react";
import { Button } from 'antd-mobile';
import './collect.less'
import CardContainer from "@/components/cardContainer/CardContainer";
import  BaseList  from '@/components/baseList/BaseList';



const titleList = [
    { name: '客户名称', code: "ly" },
    { name: '客户简称', code: 'cp' },
    { name: '客户类型', code: 'dz' },
    { name: '签约数量', code: 'zh' },
    { name: '签约产品线', code: 'cpx' },
    { name: '最近签约日期', code: 'khjl' },
    { name: '最近签约合同', code: 'lkh' },
    { name: '最近签约金额', code: 'lsqy' },
    { name: '最近签约产品', code: 'qysl' },
]

const data = [
    {
        ly: '营销云',
        cp:'由营销',
        dz:'拥有产业园',
        zh:'yonyou.com',
        cpx:'产品线',
        khjl:'客户经理',
        lkh:'老客户',
        lsqy:'隶属企业',
        qysl:'潜意识里',
    },
]

export default class Collection extends React.Component{
    componentDidMount(){
    }
    render(){
        return(
            <div className="collection-container">
                <Button>
                    添加收藏
                </Button>
                <CardContainer style={{padding:'0',margin:'10px 0',overflow:'auto'}}>
                    <BaseList titleList={titleList} dataList={data} />

                </CardContainer>
            </div>
        )
    }
}