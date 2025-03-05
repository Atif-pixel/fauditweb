import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const images = [
  "/src/assets/app/img1.jpg",
  "/src/assets/app/img2.jpg",
  "/src/assets/app/img3.jpg",
  "/src/assets/app/img3.jpg",
  "/src/assets/app/img1.jpg",
];

const ImageSlider = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5", // Light background for contrast
      }}
    >
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3} // 3 images visible at a time
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500, // Increased depth for better 3D effect
          modifier: 3, // Adjusts spacing
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{
                  width: isActive ? "500px" : "500px", // Enlarges the center image
                  height: "auto", // Maintain aspect ratio
                  transform: isActive ? "scale(1.2)" : "scale(0.9)", // Smooth scaling effect
                  borderRadius: "15px",
                  boxShadow: isActive
                    ? "0px 15px 30px rgba(0, 0, 0, 0.3)"
                    : "0px 5px 15px rgba(0, 0, 0, 0.1)", // Shadow effect for focus
                  transition: "transform 0.5s ease-in-out",
                }}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
