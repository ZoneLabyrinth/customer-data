import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer';
import {List,InputItem, WhiteSpace,Button} from 'antd-mobile'
import {createForm} from 'rc-form'
import BaseList from '@/components/baseList/BaseList';

const titleList = [
    { name: '客户名称', code: "ly" },
    { name: '经营方式', code: 'cp' },
    { name: '经营机构', code: 'dz' },
    { name: '行业分类', code: 'zh' },
    { name: '产品线', code: 'cpx' },
    { name: '客户经理', code: 'khjl' },
    { name: '是否老客户', code: 'lkh' },
    { name: '历史签约金额', code: 'lsqy' },
    { name: '签约数量', code: 'qysl' },
    { name: '最近签约日期', code: 'zjqy' },
    { name: '最近签约金额', code: 'je' }
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
        zjqy:'在家企业',
        je:'金额'
    },
]


class ManagementSearch extends React.Component {




    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div className="management-container">
                <CardContainer>
                    <WhiteSpace size="lg"/>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入机构名称"
                        >经营机构</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入客户名称"
                        >客户名称</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入行业分类"
                        >行业分类</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入名称"
                        >客户经理</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入经营方式"
                        >经营方式</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入产品线"
                        >产品线</InputItem>
                    </List>

                    <Button type="primary" loading>
                        查询
                    </Button>
                </CardContainer>
                
                <CardContainer style={{padding:'0',overflow:'auto'}}>
                    <BaseList titleList={titleList} dataList={data}/>
                </CardContainer>
            </div>

        )
    }
}

export default createForm()(ManagementSearch)
