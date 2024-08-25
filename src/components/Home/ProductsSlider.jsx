import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../Products/ProductCard";
import { Link } from "react-router-dom";
import Spiner from "../../utils/Spiner";

const ProductsSlider = ({ title, category, handelAddToCart }) => {
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = async (category) => {
    const data = await Axios.get(
      `https://dummyjson.com/products/category/${category}?limit=10`
    );
    setAllProducts(data.data.products);
  };

  useEffect(() => {
    if (category) {
      getProducts(category);
    }
  }, [category]);



  return (
    <div className="flex flex-col gap-5 mt-16 mb-10">
      <div className="flex justify-center items-center px-10 text-sky-950">
        <h2 className="w-fit text-3xl capitalize font-semibold py-3 relative after:title-line">
          {title}
        </h2>
      </div>
      <div className="pl-5 py-10">
        {allProducts.length > 0 ? (
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
            {allProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  handelAddToCart={handelAddToCart}
                  cardSize={"w-[320px]"}
                  product={product}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <Link
                className="h-[500px] w-[320px] rounded-md bg-sky-800 text-xl underline text-white font-semibold flex justify-center items-center"
                to={`/category/${category}`}
              >
                Show More
              </Link>
            </SwiperSlide>
          </Swiper>
        ) : (
          <div className="flex justify-center">
            <Spiner />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsSlider;
