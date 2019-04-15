import React from 'react'
import './exclusive.less'
import question from '@/assets/img/question.png'
import BaseList from '@/components/baseList/BaseList'
import Api from '@/api/api'
import { connect } from 'react-redux';


const title = [
    { name: '客户名称', code: 'customer_name' },
    { name: '股权关系', code: 'rela_type' },
    { name: '关系级次', code: 'rela_level' },
    { name: '经营机构', code: 'rela_corp_branch_name' },
    { name: '客户类型', code: 'rela_customer_type' },
    { name: '签约数量', code: 'rela_corp_sign_number' },
    { name: "签约模组", code: 'rela_corp_sign_prodmodule' }

]

const mapStateToProps = state => (
    { customer: state.customer }
)

class Management extends React.Component {


    state = {
        data: []
    }
    componentDidMount() {
        this.getData();
    }


    getData = async () => {
        let customerId = this.props.customer.id
        if (customerId){
        let result = await Api.getManageInfo(customerId)
        // console.log(result)
        this.setState({
            data: result.data
        })
        }
    }


    render() {
        return (
            <div className="management">
                <div className="mg-title">
                    <p>
                        <img src={question} />&nbsp;
                        说明：仅显示与客户有股权关系且属于公司老客户或指名宝贝客户的企业。
                    </p>
                </div>
                <div className="list-container">
                    <BaseList titleList={title} dataList={this.state.data} />
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(Management)