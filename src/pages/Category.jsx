import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsByCategory } from "../redux/actions/productsActions";
import ProductCard from "../components/Products/ProductCard";
import Filter from "../components/Products/Filter";
import { FilterImg } from "../images/svg";
import Spiner from "../utils/Spiner";
import { toast } from "react-toastify";

const Category = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const productsData = useSelector((state) => state.productsReducer.productsByCategory);
  const dispatch = useDispatch();

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getAllProductsByCategory(slug, `limit=30`));
    }
  }, [slug]);

  useEffect(() => {
    if (productsData) {
      setAllProducts(productsData.products);
    }
  }, [productsData]);


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
    <div className="flex justify-between w-[95%] py-10 mx-auto">
      <Filter allProducts={allProducts} setAllProducts={setAllProducts} productsData={productsData} showFilter={showFilter} setShowFilter={setShowFilter}/>
      <div className="xl:w-[78%] h-fit flex flex-col gap-12">
      <h1 className="w-fit mx-auto text-3xl text-center capitalize font-semibold py-3 relative after:title-line">{slug} category</h1>
      <div className="xl:hidden flex items-center gap-2 pl-5" onClick={()=>setShowFilter(true)}>
        <img width={30} src={FilterImg} alt="filter"/>
        <p className="text-xl font-semibold text-zinc-800">Filter</p>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {
          allProducts ? (
            allProducts.map((product) => (
              <ProductCard key={product.title} handelAddToCart={handelAddToCart} cardSize="w-[280px]" product={product} />
            ))
          ):(
            <div className='flex justify-center'>
              <Spiner/>
            </div>
          )
        }
      </div>
      </div>
    </div>
  );
};

export default Category;
