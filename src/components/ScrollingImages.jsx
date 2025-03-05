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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "70vh", // Adjust height to fit within the viewport
                  overflow: "hidden", // Ensure images don't overflow
                }}
              >
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  style={{
                    width: isActive ? "500px" : "400px", // Adjust width for active and inactive slides
                    height: "100%", // Ensure height fills the container
                    objectFit: "cover", // Ensure the image covers the area without distortion
                    borderRadius: "15px",
                    boxShadow: isActive
                      ? "0px 15px 30px rgba(0, 0, 0, 0.3)"
                      : "0px 5px 15px rgba(0, 0, 0, 0.1)", // Shadow effect for focus
                    transition: "transform 0.5s ease-in-out, width 0.5s ease-in-out",
                  }}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;