import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name:'toolkit',
    initialState:{
        cash:0,
        customers:[]
    },
    reducers:{
        addCash(state, action){
            state.cash = state.cash +action.payload
        },
        getCash(state, action){
            state.cash = state.cash -action.payload
        },
        addCustomer(state, action){
            state.customers.push(action.payload)
        },
        removeCustomer(state, action){
            console.log(action.payload);
            state.customers = state.customers.filter( customer=> customer.id !== action.payload)
        },
        addManyCustomers(state, action){
            state.customers = state.customers.concat(action.payload);
        }
    }
})

export default toolkitSlice.reducer;

export const {addCash, getCash, addCustomer, removeCustomer, addManyCustomers} = toolkitSlice.actions;