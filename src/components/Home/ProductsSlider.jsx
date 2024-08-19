import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from 'axios';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../Products/ProductCard";

const ProductsSlider = ({title, category}) => {

  const [allProducts, setAllProducts] = useState([]);


  const getProducts = async(category)=>{
    const data = await  Axios.get(`https://dummyjson.com/products/category/${category}?limit=10`)
    setAllProducts(data.data.products)
  }


  useEffect(()=>{
    if(category){
      getProducts(category)
    }
  },[category])


  return (
    <div className="flex flex-col gap-5 mt-16 mb-10">
      <div className="flex justify-center items-center px-10 text-sky-950">
        <h2 className="w-fit text-3xl capitalize font-semibold py-3 relative after:title-line">
          {title}
        </h2>
      </div>
      <div className="pl-5 py-10">
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: -10,
            },
            400: {
              slidesPerView: 1,
              spaceBetween: -50,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper max-h-full flex flex-nowrap items-center"
        >
          {
            allProducts ? (
              allProducts.map((product) => (
                <SwiperSlide key={product.id}>
                  <ProductCard cardSize={"w-[320px]"} product={product}/>
                </SwiperSlide>
              ))
            ):null
          }
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsSlider;
