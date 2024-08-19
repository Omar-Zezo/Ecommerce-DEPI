import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./utils/Navbar"
import Footer from "./utils/Footer"
import Category from "./pages/category"

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/category/:slug" element={<Category/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
