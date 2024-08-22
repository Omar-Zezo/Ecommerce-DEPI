import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { CartWhite } from "../images/svg";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);

  const { id } = useParams();

  const getSingleProduct = async () => {
    await fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  };

  console.log(singleProduct);

  useEffect(() => {
    if (id) {
      getSingleProduct();
    }
  }, [id]);

  return (
    <div className="min-h-screen w-[95%] py-10 mx-auto">
      <div className="flex justify-between max-xl:flex-col max-xl:gap-8 min-h-[500px]">
        <div className="xl:w-[35%] w-full h-full bg-white rounded-xl">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper h-full"
          >
            {singleProduct.images
              ? singleProduct.images.map((img, index) => (
                  <SwiperSlide className="flex justify-center">
                    <img
                      width={500}
                      height={500}
                      src={img}
                      alt={`img-${index}`}
                    />
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
        <div className="xl:w-[63%] w-full min-h-[500px] bg-white p-10 rounded-xl">
          <ul className="w-full flex flex-col gap-5">
            <li className="w-full flex items-center gap-3">
              <span className="text-xl text-zinc-600 font-bold capitalize">
                title:
              </span>
              <p className="text-xl text-zinc-800 font-medium">
                {singleProduct.title}
              </p>
            </li>
            <li className="w-full flex items-center gap-3">
              <span className="text-xl text-zinc-600 font-bold capitalize">
                category:
              </span>
              <p className="text-xl text-zinc-800 font-medium">
                {singleProduct.category}
              </p>
            </li>
            <li className="w-full flex items-center gap-3">
              <span className="text-xl text-zinc-600 font-bold capitalize">
                code:
              </span>
              <p className="text-xl text-zinc-800 font-medium">
                {singleProduct.sku}
              </p>
            </li>
            <li className="w-full flex items-center gap-3">
              <span className="text-xl text-zinc-600 font-bold capitalize">
                availability:
              </span>
              <p className="text-xl text-zinc-800 font-medium">
                {singleProduct.stock} in stock
              </p>
            </li>
            <li className="w-full flex items-center gap-3">
              <span className="text-xl text-zinc-600 font-bold capitalize">
                price:
              </span>
              <p className="text-xl text-zinc-800 font-medium">
                ${Math.ceil(singleProduct.price)}
              </p>
            </li>
            <li className="w-full flex flex-col gap-3">
              <span className="text-xl text-zinc-600 font-bold capitalize">
                description:
              </span>
              <p className="text-xl text-zinc-800 font-medium">
                {singleProduct.description}
              </p>
            </li>
          </ul>
          <div className="w-fit mt-5 p-3 flex items-center gap-3 cursor-pointer rounded-lg bg-sky-950 hover:bg-sky-900 duration-300 text-white font-semibold uppercase">
            add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
