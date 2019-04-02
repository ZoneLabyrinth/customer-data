import React from 'react'

import CardContainer from '@/components/cardContainer/CardContainer'
import BaseCard from '@/components/baseCard/BaseCard';

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

export default class Basic extends React.Component {
    render() {
        return (
            <div>
                <CardContainer>
                    <BaseCard data={data} active></BaseCard>
                </CardContainer>
                <CardContainer>
                    <BaseCard data={data} ></BaseCard>
                </CardContainer>
                <CardContainer>
                    <BaseCard data={data}></BaseCard>
                </CardContainer>
            </div>
        )
    }
}
