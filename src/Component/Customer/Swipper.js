import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import logo from "../../images/logo.png";
import logo1 from "../../images/logo.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default () => {
  const Customers = [
    {
      image: logo1,
      name: "Client Name",
    },
    {
      image: logo1,
      name: "Client Name",
    },
    {
      image: logo1,
      name: "Client Name",
    },
    {
      image: logo1,
      name: "Client Name",
    },
    {
      image: logo1,
      name: "Client Name",
    },
    {
      image: logo1,
      name: "Client Name",
    },
  ];
  return (
    <Swiper
      watchSlidesProgress={true}
      slidesPerView={3}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {Customers.map((customer) => (
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img width="200px" height="200px" src={customer.image} />
            <Typography>{customer.name}</Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
