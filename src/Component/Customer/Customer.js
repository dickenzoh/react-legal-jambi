import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../images/logo.png";
import logo1 from "../../images/logo.jpg";

const Customer = () => {
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
    <Box
      sx={{
        width: "100%",
        height: "150px",
        background: "linear-gradient(to right bottom, #430089, #82ffa1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "25px",
      }}
    >
      <Box sx={{}}>
        <IconButton aria-label="delete">
          <KeyboardArrowLeftRoundedIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <img width="100px" height="100px" src={logo} />
      <img width="100px" height="100px" src={logo1} />
      <img width="100px" height="100px" src={logo} />
      <img width="100px" height="100px" src={logo} />
      <img width="100px" height="100px" src={logo1} />
      <img width="100px" height="100px" src={logo} />
      <Box>
        <IconButton aria-label="delete" color="secondary">
          <KeyboardArrowRightRoundedIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Customer;
