import  React from "react";
import { Button } from 'antd-mobile';
import './collect.less'
import CardContainer from "@/components/cardContainer/CardContainer";
import  BaseList  from '@/components/baseList/BaseList';



const titleList = [
    { name: '名称', code: "ly" },
    { name: '简称', code: 'cp' },
    { name: '类型', code: 'dz' },
    { name: '数量', code: 'zh' },
    { name: '产品线', code: 'cpx' },
    { name: '最近日期', code: 'khjl' },
    { name: '最近cahn', code: 'lkh' },
    { name: '最近金额', code: 'lsqy' },
    { name: '最近产品', code: 'qysl' },
]

const data = [
    {
        ly: 'IT',
        cp:'yun',
        dz:'海淀区',
        zh:'haidian.com',
        cpx:'产品线',
        khjl:'客户',
        lkh:'老',
        lsqy:'隶属',
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