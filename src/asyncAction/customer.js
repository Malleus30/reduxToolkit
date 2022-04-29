//import { addManyCustomersAction } from "../store/customerReducer"
import { addManyCustomers } from'../toolkitRedux/toolkitSlice';

export const fetchCustomers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => dispatch(addManyCustomers(json)))
    }
}