import React from 'react'

import CardContainer from '@/components/cardContainer/CardContainer'
import BaseCard from '@/components/baseCard/BaseCard';
import Api from '@/api/api';
import { connect } from 'react-redux';
import stroe from '@/store/index'
import { getQueryString } from '@/utils/utils';
import { Toast } from 'antd-mobile';
import store from '../../../../store/index';

const titles = [
    { title: '客户名称', code: 'name' },
    { title: '曾用名', code: 'pre_name' },
    { title: '简称', code: 'short_name' },
    { title: '英文名', code: 'property3' },
    { title: '社会统一信用代码', code: 'creditcode' },
    { title: '企业注册号', code: 'regnumber' },
    { title: '纳税人识别号', code: 'taxnumber' },
]

const compScope = [
    { title: '人员规模', code: 'person_num' },
    { title: '行业（国标）', code: 'industry_name' },
    { title: '行业（企标）', code: 'yy_industry_name' },
    { title: '经营范围', code: 'businessscope' },
    { title: '企业类型', code: 'companyorgtype' },
    { title: '成立日期', code: 'estiblishtime' },
    { title: '经营开始日期', code: 'fromtime' },
    { title: '经营结束日期', code: 'totime' },
]
const compRepres= [
    { title: '注册地址', code: 'reglocation' },
    { title: '注册资本', code: 'regcapital' },
    { title: '法人代表', code: 'legalpersonname' },
    { title: '电话', code: 'phonenumber' },
    { title: '公司简介', code: 'corp_profile' },
]

const mapStateToProps = state => ({
    customer: state.customer
})

class Basic extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {
        store.subscribe(()=>{
            let customer = store.getState().customer
                if(this.props.customer !== customer){
                    this.getData(customer.id)
                }
        })
    }


    getData = async (customId) => {
        let customer = getQueryString('id')
        if (this.props.customer||customId) {
            customer = this.props.customer.id||customId
        }
        if (customer){
            let result = await Api.getCustomerInfo(139500)
            this.setState({
                data: result.data
            })
        }else{
            Toast.info('请先搜索公司', 1);
        }
    }

    render() {
        return (
            <div>
                <CardContainer>
                    <BaseCard titles={titles} data={this.state.data} active></BaseCard>
                </CardContainer>
                <CardContainer>
                    <BaseCard titles={compScope} data={this.state.data} ></BaseCard>
                </CardContainer>
                <CardContainer>
                    <BaseCard titles={compRepres} data={this.state.data}></BaseCard>
                </CardContainer>
            </div>
        )
    }
}

export default Basic = connect(
    mapStateToProps
)(Basic)