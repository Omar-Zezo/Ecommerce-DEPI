import MainSlider from '../components/Home/MainSlider'
import CategoriesSection from '../components/Home/CategoriesSection';
import ProductsSlider from '../components/Home/ProductsSlider';
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';


const Home = () => {
  const [userCart, setUserCart] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("cart")) {
      setUserCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [localStorage.getItem("cart")]);

  const successMsg = () => toast.success("Product has been added to cart");

  //handel add to cart
  const handelAddToCart = (item) => {
    if (userCart.length === 0) {
      userCart.push({ ...item, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(userCart));
      successMsg();
    } else {
      let index = userCart.findIndex((obj) => obj.id === item.id);
      if (index !== -1) {
        userCart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(userCart));
        successMsg();
      } else {
        setUserCart([...userCart, { ...item, quantity: 1 }]);
        userCart.push({ ...item, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(userCart));
        successMsg();
      }
    }
  };

  return (
    <>
      <MainSlider/>
      <CategoriesSection/>
      <ProductsSlider handelAddToCart={handelAddToCart} title="best mens watches" category={"mens-watches"}/>
      <ProductsSlider handelAddToCart={handelAddToCart} title="best mens Shirts" category={"mens-shirts"}/>
      <ProductsSlider handelAddToCart={handelAddToCart} title="best womens bags" category={"womens-bags"}/>
      <ProductsSlider handelAddToCart={handelAddToCart} title="best selling furniture" category={"furniture"}/>
      <ProductsSlider handelAddToCart={handelAddToCart} title="best selling laptops" category={"laptops"}/>
    </>
  )
}

export default Home