import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProducts } from '../slice/productSlice'

const CreateProduct = () => {

const [formData,setFormData]=useState({
  name:'',
  description:'',
  price:'',
})

const dispatch=useDispatch()

const handleChange=(e)=>{
   const {name,value}=e.target
   setFormData({...formData,[name]:value})
}

const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(createProducts(formData))
    setFormData({
      name:'',
      description:'',
      price:'',
    })
}

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Create Products</h1>
      <div style={{display:'flex',justifyContent:'center'}}>
      <form onSubmit={handleSubmit} >
        <input
         type="text" 
         placeholder='Name of Products'
         name='name'
         value={formData.name}
         onChange={handleChange}
         /><br /> <br />

        <input 
        type="text" 
        placeholder='Description'
        name='description'
        value={formData.description}
        onChange={handleChange}
        /> <br /> <br />

        <input 
        type="text" 
        placeholder='Price'
        name='price'
        value={formData.price}
        onChange={handleChange}
        /> <br /> <br />

        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default CreateProduct

