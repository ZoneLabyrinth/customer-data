import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer'
import BaseCard from '@/components/baseCard/BaseCard';
import { connect,store } from 'react-redux';
import Api from "@/api/api";


const titles = [
    { title: '名称', code: 'customer_name' },
    { title: '方式', code: 'named_type' },
    { title: '开始', code: 'start_date' },
    { title: '结束', code: 'end_date' },
    { title: '所属', code: 'branch_name_level3' },
    { title: '县城', code: 'product_line' },
    { title: '人员', code: 'staff_name' },
    { title: '个人邮箱', code: 'staff_mail' },
    { title: '联系人', code: 'contacts ' },
    { title: '职务', code: 'contacts_duty' },
    { title: '联系电话', code: 'contacts_phone' },
    { title: '邮箱', code: 'contacts_email' },
    // {title:'',value:''},
]

const mapStateToProps = state => ({
    customer: state.customer
})

class Marks extends React.Component {
    state={
        data:{}
    }
    componentDidMount() {
        this.getData();
    }


    getData = async () => {
        let customerId = this.props.customer.id
        if (customerId){
            let result = await Api.getMarksInfo(customerId)
            this.setState({
                data: result
            })
        }
    }
    
    render() {
        return (
            <div>
                <CardContainer>
                    <BaseCard titles={titles} data={this.state.data} active></BaseCard>
                </CardContainer>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Marks)