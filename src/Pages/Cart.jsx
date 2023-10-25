import React, { useEffect, useState } from 'react'
import { Table,Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromCart,emptyCart } from '../redux/slices/cartSlice'

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const [total,setTotal]= useState(0)
  const getCartTotal =()=>{
    if(cartArray.length>0){
    setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }else{
  setTotal(0)
}
}
const handleEcart =()=>{
  dispatch(emptyCart())
 alert("Order successfully Placed... Thank you for purchase with us!!!")
 navigate('/')
}
useEffect(()=>{getCartTotal()},[cartArray])
  return (
    <div className='container' style={{marginTop:'100px'}}>
      {
      cartArray.length > 0 ?
       <div className='row mt-5'>
            
         <div className='col-lg-8'>
           <Table striped bordered hover variant="light" >
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cartArray.map((products,index)=>(
    
            <tr key={index}>
              <td>{index+1}</td>
              <td>{products.title}</td>
              <td>
                <img width={'100px'} height={'100px'} src={products.thumbnail} alt="" />
              </td>
              <td>${products.price}</td>
              <td>
              <Button onClick={()=>dispatch(removeFromCart(products.id))}  className='btn btn-light'><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
              </td>
            </tr>
            
              ))
              }
          </tbody>
        </Table>
         </div>
      <div className='col-lg-1'></div>
      <div className="col-lg-3">
        <h1 className='text-primary text-center'>Cart Summary</h1>
        <div className='border mt-3 p-3 rounded shadow'>
          <h4>Total Products: <span>{cartArray.length}</span></h4>
          <h4 className='mt-3'>Total : <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
          <div className='d-grid'>
            <button onClick={handleEcart} className='btn btn-success mt-5 rounded'> Check Out</button>
          </div>
        </div>
      </div>
       </div>:<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'350px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
            <h3 className='fw-bolder text-warning'>Your Cart is Empty!</h3>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to='/'>Back to Home</Link></div>
}
    </div>
  )
}

export default Cart