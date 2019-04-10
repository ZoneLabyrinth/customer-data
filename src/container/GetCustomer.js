/**
 * 分离容器组件和展示组件（本处不是必须）
 */

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import SearchList from '../components/navbar/SearchList';
import { curCustomer } from '../store/actions';

//获取state上的list，无默认值会报错
const mapStateToProps = state => ({
    list: state.list
})

/**
 * 
 * @param {*} dispatch 
 * @param {*} historty
 * @param {*} hanlderCancle 父级传入，用于取消搜索框
 */

const mapDispatchProps = (dispatch, { history,hanlderCancle }) => ({
    onSearchClick: (customer) => {
        dispatch(curCustomer(customer))
        history.push(`/info/exclusive/basic?customer=${customer.name}&customerId=${customer.id}`)
        //取消显示搜索列表
        hanlderCancle();
    }
})

//将SearchList connect上map函数 对应searchlist上的onsearchclick函数
const GetCustomer = withRouter(connect(mapStateToProps,mapDispatchProps)(SearchList))

export default GetCustomer