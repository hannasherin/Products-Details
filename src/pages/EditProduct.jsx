import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProducts } from '../slice/productSlice'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {

    const {id}=useParams()
    const {products,isloading,error}=useSelector((state)=> state.productInfo)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [formData,setFormData]=useState({
        name:'',
        description:'',
        price:'',
    })
   useEffect(()=>{

const product=products.find((item)=>String(item.id)===String(id))

if(product){
    setFormData({
        name:product.name,
        description:product.description,
        price:product.price,
    })
}

   },[products,id])

   const handleChange=(e)=>{
    const {name,value}=e.target ;
    setFormData({...formData,[name]:value})

   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(updateProducts({
        id:id,
        name:formData.nmae,
        description:formData.description,
        price:formData.price
    }))
   navigate('/productlist')
   }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Update Product</h1> <br />
            <div style={{display:'flex',justifyContent:'center'}}>
                <form onSubmit={handleSubmit}>
                    <input type="text"  
                       name='name'
                       value={formData.name}
                       onChange={handleChange}
                    /> <br /> <br />

                    <input type="text"
                    name='description'
                       value={formData.description}
                       onChange={handleChange} /> <br /> <br />

                    <input type="text"
                    name='price'
                       value={formData.price}
                       onChange={handleChange} /> <br /> <br />

                       <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EditProduct
