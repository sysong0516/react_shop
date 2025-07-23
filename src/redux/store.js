import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";
import watched from "./watchedSlice";

const test = createSlice({
  name: 'test',
  initialState: 'hello'
})

const item = createSlice({
  name: 'item',
  initialState: ['apple', 'banana']
})

//slice에는 reducer와 Action이 있다
const num = createSlice({
  name: 'num',
  initialState: 1,
  reducers: {
    changeNum(){
      return 10
    },
    //파라미터의 state는 현재 state의 값이 들어간다
    plusNum(state){
      return state+1
    },
    nplusNum(state, action){
      console.log(action);

      return state + action.payload//매개변수의 값은 payload에 담긴다
    }
  }
})
//변경함수를 외부에서 쓰고싶다면 export를 해주자 actions 안에 함수들이 담겨있음
//changeNum은 num의 action으로 등록되었다
export const { changeNum, plusNum, nplusNum } = num.actions

const obj = createSlice({
  name: 'obj',
  initialState:{name:'song', age:26},
  reducers:{
    changeAge(state, action){
      state.age = action.payload
    }
  }
})

export const { changeAge } = obj.actions

export default configureStore({
  reducer: {
    test: test.reducer,
    item: item.reducer,
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,
    watched: watched.reducer,
  }
})