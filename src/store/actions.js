import * as actionTypes from './actionTypes';

export const customerList = (list) => ({
    type: actionTypes.CUSTOMER_LIST,
    list
})

export const curCustomer = (customer) =>({
    type:actionTypes.CUR_CUSTOMER,
    customer
})


export const textData = (text) =>({
    type:actionTypes.TEXT_DATA,
    text
})

export const imgList = (imgList) =>({
    type:actionTypes.IMG_LIST,
    imgList
})