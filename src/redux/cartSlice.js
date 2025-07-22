import { configureStore, createSlice } from "@reduxjs/toolkit"

const cart = createSlice({
  name: 'cart',
  initialState:[
    {id:0, title:'apple', count:3},
    {id:2, title:'watermelon', count:10},
  ],
  reducers:{
    addCount(state,action){
      state[action.payload].count++
    },
    addItem(state, action){
      action.payload.count=1;
      state.push(action.payload);
    },
    removeItem(state, action){
      state.splice(action.payload, 1)
    },
    isDuplicate(state, action){
      return state.findIndex(data => data.id == action.payload.id)
    }
  }
})

export const { addCount, addItem, isDuplicate, removeItem } = cart.actions

export default cart;