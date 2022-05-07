export const ADD_TO_CART="ADD_TO_CART";
 
export const REMOVE_ITEM = 'REMOVE_ITEM'
 
export const FAVORITES = 'FAVORITES'
 
export const CHANGE_QTY ='CHANGE_QTY'


export const addItem = (eachproduct) =>({
    type: ADD_TO_CART,
    payload: eachproduct
})