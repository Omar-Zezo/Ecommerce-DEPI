import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./utils/Navbar"
import Footer from "./utils/Footer"
import Category from "./pages/category"
import SearchPage from "./pages/SearchPage"
import { useState } from "react"

function App() {
  const [searchPage, setSearchPage] = useState(false);

  const openSearch = (mode)=>{
    setSearchPage(mode)
  }

  return (
    <>
    <BrowserRouter>
    <Navbar searchPage={searchPage} openSearch={openSearch}/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/category/:slug" element={<Category/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      <Footer openSearch={openSearch}/>
    </BrowserRouter>
    </>
  )
}

export default App
