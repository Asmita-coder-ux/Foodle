import React from 'react'
import Delete from '../components/Delete';
import { useCart, useDispatchCart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3 text-white'>The Cart is Empty!</div>
      </div>
    )
  }
  const handleRemove = (index)=>{
    console.log(index)
    dispatch({type:"REMOVE",index:index})
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:5000/api/auth/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    console.log("JSON RESPONSE BODY:::::", await response.json()); 
    // console.log("Order response",response)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  // const handleCheckOut = async () => {
  //   let userEmail = localStorage.getItem("userEmail");
  //   let response = await fetch("http://localhost:5000/api/auth/orderData", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       order_data: data,
  //       email: userEmail,
  //       order_date: new Date().toDateString()
  //     })
  //   });
  
  //   // Parse the response body as JSON
  //   const responseData = await response.json();
  
  //   console.log("Order response", response);
  //   console.log("Response data", responseData);
  
  //   if (response.status === 200) {
  //     // Handle successful checkout
  //     dispatch({ type: "DROP" });
  //   } else {
  //     // Handle other status codes or errors
  //     // For example, you can display an error message
  //     console.log("Checkout failed");
  //   }
  // }
  
  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  
  return (
    <div>

      {console.log(data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody className='text-success fs-4'>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
               
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 text-white'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}