import * as types from './actionTypes'


const initailState = {
    customer:"",
    list:[]
    
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
        default:
            return state
    }
}

