import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer';
import BaseList from '@/components/baseList/BaseList';

const titleList = [
    { name: '领域', code: "ly" },
    { name: '产品', code: 'cp' },
    { name: '地址', code: 'dz' },
    { name: '访问账号', code: 'zh' }
]

const data = [
    {
        ly: '营销云',
        cp:'由营销',
        dz:'拥有产业园',
        zh:'yonyou.com'
    },
]


export default class Production extends React.Component {


    render() {
        return (
            <div className="production-container">
                <CardContainer style={{padding:'0'}}>
                    <BaseList titleList={titleList} dataList={data} />
                </CardContainer>
            </div>

        )
    }
}
