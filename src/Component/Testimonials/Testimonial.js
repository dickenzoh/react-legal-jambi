import React from "react";
import user1 from "../../images/user1.jpeg";
import user2 from "../../images/user2.jpeg";
import user3 from "../../images/user3.jpeg";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials" id="testimonials">
          <div className="container">
            <span className="line"></span>

            <div className="content">
              <div className="card">
                <img src={user1} alt="user1" />
                <p>
                  It is not every day that you come across a passionate and
                  trustworthy financial advisor. John Doe is true professional
                  who does his work really well. Thanks John!
                </p>
                <p>
                  <span>Johnson.M.J.</span>
                </p>
                <p>Director of "Financial Times"</p>
              </div>
              <div className="card">
                <img src={user2} alt="user1" />
                <p>
                  In just 2 very short meetings with John he managed to find the
                  solution personally catered to my situation and expectations.
                  Punctual, well informed and very reliable.
                </p>
                <p>
                  <span>Carol Harper</span>
                </p>
                <p>Director at Risktec Solutions Ltd</p>
              </div>
              <div className="card">
                <img src={user3} alt="user1" />
                <p>
                  A very professional financial advisor, who is true to his
                  word. John has demonstrated a high amount of integrity in the
                  time I have known him, and he is fast to respond to my
                  concerns.
                </p>
                <p>
                  <span>Snow.J.R.</span>
                </p>
                <p>Managing Director of BPW Global</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

{
  /* <Carousel
swipeable={false}
draggable={false}
showDots={true}
responsive={responsive}
ssr={true} // means to render carousel on server-side.
infinite={true}
//autoPlay={this.props.deviceType !== "mobile" ? true : false}
autoPlaySpeed={1000}
keyBoardControl={true}
customTransition="all .5"
transitionDuration={500}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet", "mobile"]}
//deviceType={this.props.deviceType}
dotListClass="custom-dot-list-style"
itemClass="carousel-item-padding-40-px"
>            </Carousel> */
}
