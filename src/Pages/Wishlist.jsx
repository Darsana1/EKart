import React from 'react'
import { Col, Row ,Card,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishListSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (products)=>{
  dispatch(addToCart(products))
  dispatch(removeFromWishlist(products.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='m-5'>
        {
          wishlistArray.length > 0 ?
          wishlistArray.map((products,index)=>(
            <Col key={index} className='mb-5'  sm={12} md={6} lg={4} xl={3}>
            <Card className='shadow rounded bg-light' style={{ width: '18rem',height:"29rem",color:"black"}}>
              <Card.Img height={'200px'} variant="top" src={products?.thumbnail}/>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                  <p>{products?.description.slice(0,55)}...</p>
                  <h5 className='fw-bolder'>${products?.price}</h5>
                </Card.Text>
               <div className='d-flex justify-content-between'>
                  <Button onClick={()=>dispatch(removeFromWishlist(products.id))} className='btn btn-light'><i class="fa-solid fa-trash text-danger fa-2x"></i></Button>
                  <Button onClick={()=>handleWishlistCart(products)} className='btn btn-light'><i class="fa-solid fa-cart-plus text-warning fa-2x"></i></Button>
               </div>
              </Card.Body>
            </Card>
         </Col>
          )):<div style={{height:'60vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <img height={'350px'} src="https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b9521b4b7adc2ede5194a30481a1994f52968b0d1f9d&rid=giphy.gif&ct=s" alt="" />
            <h3 className='fw-bolder text-warning'>Your wishlist is Empty!</h3>
            <Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to='/'>Back to Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist