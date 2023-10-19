import React from 'react'
import { Col,Row,Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishListSlice'

function Home() {
 const data = useFetch("https://dummyjson.com/products")
  //console.log(data);
  const dispatch = useDispatch()
  return (
   <Row className='ms-5' style={{marginTop:"100px"}}> 
     {
      data?.length>0?data?.map((products,index)=>(
       <Col key={index} className='mb-5 ' sm={12} md={6} lg={4} xl={3}>
          <Card className='shadow rounded bg-light' style={{ width: '18rem',height:"29rem",color:"black"}}>
            <Card.Img height={'200px'} variant="top" src={products?.thumbnail}/>
            <Card.Body>
              <Card.Title>{products.title}</Card.Title>
              <Card.Text>
                <p>{products?.description.slice(0,55)}...</p>
                <h5 className='fw-bolder'>${products?.price}</h5>
              </Card.Text>
             <div className='d-flex justify-content-between'>
                <Button onClick={()=>dispatch(addToWishlist(products))} className='btn btn-light'><i class="fa-solid fa-heart text-danger fa-2x"></i></Button>
                <Button className='btn btn-light'><i class="fa-solid fa-cart-plus text-warning fa-2x"></i></Button>
             </div>
            </Card.Body>
          </Card>
       </Col>
       )): <p className='text-danger fw-bolder fs-4'>Nothing to display!!!</p>
     }
   </Row>
  )
}

export default Home