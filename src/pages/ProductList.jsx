import React, { useEffect } from 'react'
import {  deleteProducts, getProductfromServer } from '../slice/productSlice'
import { useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {


const navigate=useNavigate()
const {products , isloading , error}=useSelector((state)=> state.productInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductfromServer())
  }, [])

 const handleDelete=(id)=>{
  dispatch(deleteProducts(id))
 }


    
  return (
    <div>
      <h1>Product List</h1>
    {isloading && <h1 style={{fontWeight:'bold',fontSize:'20px',color:'yellow'}}>Loading...</h1>}
      {error && <h1 style={{fontWeight:'bold',fontSize:'20px',color:'red'}}>Server Error</h1>}

      <br />
      {products.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.description}</p>
          <img src={item.image} alt="" width="150" />
          <p>{item.price}</p>
          <button onClick={()=>handleDelete(item.id)}>Delete</button> 
          <button onClick={()=>navigate(`/edit-product/${item.id}`)}>Edit</button>
          <hr />
        </div>
        
      ))}
      
    </div>
  )
}

export default ProductList
