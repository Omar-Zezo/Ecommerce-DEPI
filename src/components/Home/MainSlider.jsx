import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { mainSliderImgs } from "../../constants";

const MainSlider = () => {
  return (
    <div className="h-fit xl:h-[400px]">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper max-h-full"
      >
        {mainSliderImgs.map((slide) => (
          <SwiperSlide key={slide.name}>
            <Link to={slide.path}>
              <img
                className="size-full object-cover object-center"
                src={slide.img}
                alt={slide.name}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
