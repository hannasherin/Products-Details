import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import CreateProduct from "./pages/CreateProduct"
import ProductList from "./pages/ProductList"
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CreateProduct/>} />
      <Route path="/productlist" element={<ProductList/>} />
    </Routes>

    </>
  )
}

export default App
