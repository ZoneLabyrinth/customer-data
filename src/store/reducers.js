import * as types from './actionTypes'


const initailState = {
    customer:"",
    list:[],
    text:{}
}


export const customer = (state = initailState,action) =>{
    switch(action.type){
        case types.CUR_CUSTOMER:
            return Object.assign({},state,{
                customer:action.customer
            })
        case types.CUSTOMER_LIST:
            return Object.assign({},state,{
                list:action.list
            })
        case types.TEXT_DATA:
            return Object.assign({},state,{
                text:action.text
            })
        default:
            return state
    }
}

