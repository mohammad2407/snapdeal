import { ADD_TO_CART } from './action'
import { REMOVE_ITEM } from './action'
import { FAVORITES } from './action'
import { CHANGE_QTY } from './action'

const initialState = {
    cart: [],
    wishlist: [],
}

export const reducer = (store = initialState, action) => {
    console.log(store.cart)
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...store,
                cart: [...store.cart, action.payload]
            }
        case FAVORITES:
            return {
                ...store,
                wishlist: [...store.wishlist, action.payload]
            }

        case REMOVE_ITEM:
            const updated = store.cart.filter((el, index) => el.id != action.payload)
            return {
                ...store,
                cart: updated
            }
        case CHANGE_QTY:
            // const updated_data = store.cart.map((item,index) => item.id)
            return {
                ...store,
                cart: [...store.cart, action.payload]
            }
        default:
            return store;
    }
}