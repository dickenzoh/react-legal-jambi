import { Typography } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Blog from "./Blog/Blog";
import useStyles from "./styles";
import "./styles.js";

const Blogs = ({ setCurrentId }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const gotoPrevPage = () => {
    navigate(-1);
  };

  const blogs = [
    {
      id: 1,
      title: "How to get justice",
      likes: 2,
      selectedFile: "../../images/blog2.svg",
      message:
        "In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
    },
    {
      id: 2,
      title: "How to get justice",
      likes: 2,
      selectedFile: "../../images/blog2.svg",
      message:
        "In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
    },
    {
      id: 3,
      title: "How to get justice",
      likes: 2,
      selectedFile: "../../images/blog2.svg",
      message:
        "In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
    },
    {
      id: 4,
      title: "How to get justice",
      likes: 2,
      selectedFile: "../../images/blog2.svg",
      message:
        "In just 2 very short meetings with John he managed to find the solution personally catered to my situation and expectations. Punctual, well informed and very reliable.",
    },
  ];

  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to right bottom,  #82ffa1, #430089)",
          height: "180px",
          top: 0,
        }}
      >
        <Box>
          <Button
            sx={{ m: "25px" }}
            borderRadius="25px"
            variant="contained"
            onClick={gotoPrevPage}
          >
            Back
          </Button>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Welcome to our Blog.</Typography>
          </Box>
        </Box>
      </Box>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
        m={2}
      >
        {blogs.map((blog) => (
          <Grid key={blog.id} item xs={12} sm={12} md={4} lg={3} xl={2}>
            <Blog blog={blog} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Blogs;
