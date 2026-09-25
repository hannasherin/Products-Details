
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

const {products , isloading , error}=useSelector((state)=> state.productInfo)


  return (
    <div>
      <nav>
        <div>
            <h1>Products</h1>
        </div>
        <ul>
            <li><Link to="/" style={{textDecoration:'none',color:'white'}}>Create Products</Link></li>
            <li><Link to="/productlist" style={{textDecoration:'none',color:'white'}}>Products list</Link></li>
        </ul>
        <div>
            <h3>Count: {products.length}</h3>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
