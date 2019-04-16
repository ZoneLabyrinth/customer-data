import React from 'react'
import './exclusive.less'
import question from '@/assets/img/question.png'
import BaseList from '@/components/baseList/BaseList'
import Api from '@/api/api'
import { connect } from 'react-redux';


const title = [
    { name: '名称', code: 'customer_name' },
    { name: '关系', code: 'rela_type' },
    { name: '级次', code: 'rela_level' },
    { name: '机构', code: 'rela_corp_branch_name' },
    { name: '类型', code: 'rela_customer_type' },
    { name: '数量', code: 'rela_corp_sign_number' },
    { name: "模组", code: 'rela_corp_sign_prodmodule' }

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
                        说明：仅显示关系且属于公司的企业仅显示关系且属于公司的企业。
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