import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer';
import {List,InputItem, WhiteSpace,Button} from 'antd-mobile'
import {createForm} from 'rc-form'
import BaseList from '@/components/baseList/BaseList';

const titleList = [
    { name: '名称', code: "ly" },
    { name: '方式', code: 'cp' },
    { name: '机构', code: 'dz' },
    { name: '分类', code: 'zh' },
    { name: '产品线', code: 'cpx' },
    { name: '客户', code: 'khjl' },
    { name: '是否老', code: 'lkh' },
    { name: '历史金额', code: 'lsqy' },
    { name: '数量', code: 'qysl' },
    { name: '最近日期', code: 'zjqy' },
    { name: '最近金额', code: 'je' }
]

const data = [
    {
        ly: '营销云',
        cp:'由营销',
        dz:'海淀区',
        zh:'beijing.com',
        cpx:'产品线',
        khjl:'经理',
        lkh:'老',
        lsqy:'隶属',
        qysl:'潜意识里',
        zjqy:'在家',
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
                            placeholder="请输入名称"
                        >机构</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入名称"
                        >名称</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入分类"
                        >分类</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入名称"
                        >客</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入方式"
                        >方式</InputItem>
                    </List>
                    <List>
                        <InputItem
                            {...getFieldProps('inputclear')}
                            clear
                            placeholder="请输入线"
                        >线</InputItem>
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
