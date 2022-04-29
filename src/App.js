import './App.css';
import { useDispatch, useSelector } from 'react-redux';
//import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
//import { INCREMENT, DECREMENT } from './toolkitRedux/toolkitReducer';
 
import { fetchCustomers } from './asyncAction/customer';
import { addCash,getCash,addCustomer, removeCustomer } from './toolkitRedux/toolkitSlice';


function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.toolkit.cash);
  const customers = useSelector(state => state.toolkit.customers);
  console.log(cash);
  const addCashArray = (cash) => {
     dispatch(addCash(cash))
  }
  const getCashArray = (cash) =>{
    dispatch(getCash(cash))
  }
  const addCustomerArray = (name) => {
    const customer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomer(customer))
  }
  /*const cash = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) =>{
      dispatch({type:'ADD_CASH', payload:cash})
  }
  const getCash = (cash) =>{
      dispatch({type:'GET_CASH', payload:cash})
  }

    const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now()
    }

    dispatch(addCustomerAction(customer))
  } */

  const removeCustomerArray = (customer) => {
    alert(customer);
    dispatch(removeCustomer(customer))
  } 
  return (
    <div className="App">
      <div style={{fontSize:'3rem'}}>{cash}</div>
      <div>
       <button onClick={()=>{addCashArray(Number(prompt()))}}>Пополнить со счета</button>
        <button onClick={()=>{getCashArray(Number(prompt()))}}>Снять со счета</button>
        <button onClick={()=> addCustomerArray(prompt())}>Add Client</button> 
        <button onClick={()=> dispatch(fetchCustomers())}>Get clients from base</button> 
      </div>
      {customers.length > 0 ? 
        <div>
          {customers.map(customer => 
            <div onClick={() =>removeCustomerArray(customer.id)} key={customer.id} style={{fonttSize:'2rem', border:'1px solid black', padding:'10px'}}>{customer.name}</div>)}
        </div>
      : <div style={{fontSize:'2rem'}}> 
        Clients are missing
          </div> }
    </div>
  );
}

export default App;
