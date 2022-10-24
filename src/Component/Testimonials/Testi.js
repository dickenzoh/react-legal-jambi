// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import logo from "../../images/logo.png";
import logo1 from "../../images/logo.jpg";
import user1 from "../../images/user1.jpeg";
import user2 from "../../images/user2.jpeg";
import user3 from "../../images/user3.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styl.css";
import { Box } from "@mui/system";

export default () => {
  const testimonials = [
    {
      name: "Johnson Mj",
      img: user1,
      message:
        "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!",
      position: "Director of Financial Times",
    },
    {
      name: "Johnson Mj",
      img: user2,
      message:
        "In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
      position: "Director of Financial Times",
    },
    {
      name: "Johnson Mj",
      img: user3,
      message:
        "A very professional financial advisor, who is true to his word. John has demonstrated a high amount of integrity in the time I have known him, and he is fast to respond to my concerns.",
      position: "Director of Financial Times",
    },
    {
      name: "Johnson Mj",
      img: user1,
      message:
        "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!",
      position: "Director of Financial Times",
    },
    {
      name: "Johnson Mj",
      img: user2,
      message:
        "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!",
      position: "Director of Financial Times",
    },
    {
      name: "Johnson Mj",
      img: user3,
      message:
        "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!",
      position: "Director of Financial Times",
    },
    {
      name: "Johnson Mj",
      img: user2,
      message:
        "It is not every day that you come across a passionate and trustworthy financial advisor. John Doe is true professional who does his work really well. Thanks John!",
      position: "Director of Financial Times",
    },
  ];
  return (
    <Box
      sx={{
        mb: "45px",
      }}
    >
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testi) => (
          <SwiperSlide>
            <div className="card">
              <img src={testi.img} alt="user1" />
              <p>{testi.message}</p>
              <p>
                <span>{testi.name}</span>
              </p>
              <p>{testi.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
