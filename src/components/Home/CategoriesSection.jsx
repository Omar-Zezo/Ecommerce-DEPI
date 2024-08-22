import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Link } from "react-router-dom";
import { Categories } from "../../constants";

const CategoriesSection = () => {
  return (
    <div className="xl:px-10 overflow-x-auto">
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        className="mySwiper max-h-full flex items-center"
      >
        {Categories.map((cat, index) => (
          <SwiperSlide className="flex justify-center py-10" key={index}>
            <Link to={`/category/${cat.path}`}>
              <div className="flex flex-col gap-5 text-center">
              <div className="xl:size-32 size-28 rounded-full shadow-md shadow-sky-300 hover:shadow-orange-300 bg-black border-2 border-sky-800 hover:border-orange-500 duration-300">
              <img width={500} height={500} className="size-full object-cover rounded-full" src={cat.img} alt={cat.name}/>
              </div>
              <h4 className="text-zinc-800 hover:text-orange-500 duration-300 text-lg font-semibold capitalize">{cat.name}</h4>

              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoriesSection;
