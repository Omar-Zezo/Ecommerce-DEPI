import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./utils/Navbar";
import Footer from "./utils/Footer";
import Category from "./pages/category";
import SearchPage from "./pages/SearchPage";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Notify from "./utils/Notify";

function App() {
  const [searchPage, setSearchPage] = useState(false);
  const [cartItemsNums, setCartItemsNums] = useState(0);

  const openSearch = (mode) => {
    setSearchPage(mode);
  };

  // numbers of items in cart
  useEffect(() => {
    if (localStorage.getItem("cart")) {
      if (JSON.parse(localStorage.getItem("cart")).length > 0) {
        setCartItemsNums(JSON.parse(localStorage.getItem("cart")).length);
      }
    }
  }, [localStorage.getItem("cart")]);

  return (
    <>
      <BrowserRouter>
        <Navbar
          cartItemsNums={cartItemsNums}
          searchPage={searchPage}
          openSearch={openSearch}
        />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/edit-product/:id" element={<EditProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer openSearch={openSearch}/>
        <Notify />
      </BrowserRouter>
    </>
  );
}

export default App;
