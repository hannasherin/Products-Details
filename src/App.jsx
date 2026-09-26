import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import CreateProduct from "./pages/CreateProduct"
import ProductList from "./pages/ProductList"
import EditProduct from "./pages/editProduct"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CreateProduct/>} />
      <Route path="/productlist" element={<ProductList/>} />
      <Route path="/edit-product/:id" element={<EditProduct/>} />
    </Routes>

    </>
  )
}

export default App
