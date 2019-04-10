import * as actionTypes from './actionTypes';

export const customerList = (list) => ({
    type: actionTypes.CUSTOMER_LIST,
    list
})

export const curCustomer = (customer) =>({
    type:actionTypes.CUR_CUSTOMER,
    customer
})