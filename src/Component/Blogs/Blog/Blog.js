import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbUpAlt";
//import blog4 from "../../images/lawfirm.svg";
import blog1 from "../../../images/blog1.svg";

import useStyles from "./styles";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/system";

const Blog = ({ blog, setCurrentId }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log("posteds");
  console.log(user);
  const navigate = useNavigate();

  const Likes = () => {
    if (blog.likes.length > 0) {
      return blog.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {blog.likes.length > 2
            ? `You and ${blog.likes.length - 1} others`
            : `${blog.likes.length} like${blog.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{blog.likes.length} {blog.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = () => navigate(`posts/posts/${blog.id}`);
  return (
    <Box
      sx={{
        width: "80%",
      }}
    >
      <Card className={classes.card} raised elevation={6}>
        <NavLink style={{ textDecoration: "none" }} to={`/blog`}>
          <CardMedia
            className={classes.media}
            image={blog1}
            title={blog.name}
          />
          <div className={classes.overlay}>
            <Typography variant="h6">{blog.name}</Typography>
          </div>
          <div className={classes.overlay2}>
            {(user?.result?.googleId === blog?.creator ||
              user?.result?._id === blog?.creator) && (
              <Button
                style={{ color: "white" }}
                size="small"
                onClick={() => setCurrentId(blog.id)}
              >
                <MoreHorizIcon fontSize="default" />
              </Button>
            )}
          </div>
          <CardContent>
            <Typography className={classes.title} variant="h5" gutterBottom>
              {blog.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {blog.message}
            </Typography>
          </CardContent>
        </NavLink>
        <CardActions className={classes.CardActions}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => console.log("Liked")}
          >
            <Likes />
          </Button>
          {(user?.result?.googleId === blog?.creator ||
            user?.result?._id === blog?.creator) && (
            <Button
              size="small"
              color="primary"
              onClick={() => console.log("Detelete")}
            >
              <DeleteIcon fontSize="small" />
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default Blog;
