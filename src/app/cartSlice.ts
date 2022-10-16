import { createSlice } from '@reduxjs/toolkit'

const addToLocalStorage = (data, sum) => {
    localStorage.setItem('cart', JSON.stringify(data))
    localStorage.setItem('total', JSON.stringify(sum))
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartData: [],
    subtotal: 0,
  },
  reducers: {
    addToCartData: (state, action) => {
        if (state.cartData.length === 0) {
            state.cartData = [{...action.payload, count: 1}]
            state.subtotal = action.payload.price
        } else {
           let identifier;
                for(let i = 0; i < state.cartData.length; i++) {
                     if(state.cartData[i].id === action.payload.id) {
                         identifier = state.cartData[i].id;
                         break;
                     }
                }
            identifier ?
                state.cartData.forEach((item) => {
                    if (item.id === identifier) {
                      item.count += 1
                     }
                 })
            : state.cartData = [...state.cartData, {...action.payload, count: 1}]
            state.subtotal += action.payload.price
        } 
        addToLocalStorage(state.cartData, state.subtotal)
        return state 
    },
    deleteOfCartData: (state, action) => {
        state.cartData = state.cartData.filter(item => {
            if (item.id === action.payload.id) {
                console.log('action.payload.id', action.payload.id);
                
               state.subtotal -= action.payload.count * action.payload.price
            }
           return item.id !== action.payload.id
        })
        addToLocalStorage(state.cartData, state.subtotal)
        return state 
    },
    decrementOfCartData: (state, action) => {
        state.cartData.forEach((item) => {
            if (item.id === action.payload.id) {
                item.count -= 1
                state.subtotal -= action.payload.price
            }
        } )
        addToLocalStorage(state.cartData, state.subtotal)
        return state 
    },
    getSaveCartData: (state, action) => {
        state.cartData = action.payload
        return state 
    },
    getSaveTotalCart: (state, action) => {
        state.subtotal = action.payload
        return state 
    },
  }
})

export const { addToCartData, deleteOfCartData, decrementOfCartData, getSaveCartData, getSaveTotalCart } = cartSlice.actions

export default cartSlice.reducer