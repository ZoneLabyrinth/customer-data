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
    { title: '用户名称', code: 'name' },
    { title: '曾用名', code: 'pre_name' },
    { title: '简称代码', code: 'short_name' },
    { title: '英文名', code: 'property3' },
    { title: '代码', code: 'creditcode' },
    { title: '注册号', code: 'regnumber' },
    { title: '识别号', code: 'taxnumber' },
]

const compScope = [
    { title: '规模', code: 'person_num' },
    { title: '行业（国）', code: 'industry_name' },
    { title: '行业（企）', code: 'yy_industry_name' },
    { title: '范围', code: 'businessscope' },
    { title: '类型', code: 'companyorgtype' },
    { title: '独立日', code: 'estiblishtime' },
    { title: '开始日期', code: 'fromtime' },
    { title: '结束日期', code: 'totime' },
]
const compRepres= [
    { title: '地址', code: 'reglocation' },
    { title: '金额', code: 'regcapital' },
    { title: '代表', code: 'legalpersonname' },
    { title: '电话', code: 'phonenumber' },
    { title: '简介', code: 'corp_profile' },
]

const mapStateToProps = state => ({
    customer: state.customer
})

class Basic extends React.Component {

    state = {
        data: {}
    }

    componentDidMount() {                    
        this.getData(this.props.customId);
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
            let result = await Api.getCustomerInfo(customer)
            this.setState({
                data: result
            })
        }else{
            Toast.show('请先搜索公司', 1);
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