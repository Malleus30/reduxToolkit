import { createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    count:0,
    todos:['user1', 'user2', 'user3']
}

export const INCREMENT = createAction('INCREMENT');
export const DECREMENT = createAction('DECREMENT');

export default createReducer(initialState, {
    [INCREMENT]: function(state){
        state.count = state.count +1
    },
    [DECREMENT]: function(state){
        state.count = state.count-1
    }
})

//console.log(GET_CASH);