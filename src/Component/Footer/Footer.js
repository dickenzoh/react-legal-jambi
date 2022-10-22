import {
  Box,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./styles.css";
import { Stack } from "@mui/system";
import { SocialIcon } from "react-social-icons";
import illustrlaw from "../../images/lawfirm.svg";

const Footer = () => {
  const socialMediaHandlesLinks = {
    facebook: "https://www.facebook.com/warembowaofisih",
    instagram: "https://www.instagram.com/im_phani_murari/?hl=en",
    linkedin: "https://www.linkedin.com/in/kinoti-dickens-184264123/",
    twitter: "https://twitter.com/DickensKinoti",
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: "25px",
          gap: 20,
        }}
      >
        <Box>
          <Typography gutterBottom variant="h5">
            Services
          </Typography>
          <Typography>Business</Typography>
          <Typography>Disputes</Typography>
          <Typography>Immigration</Typography>
          <Typography>Law</Typography>
          <Typography>Commercial</Typography>
          <Typography>Property</Typography>
          {/* <Typography>Solicitors</Typography>
        <Typography>Construction</Typography>
        <Typography>Corporate</Typography>
        <Typography>Data</Typography>
        <Typography>Protection</Typography>
        <Typography>Property & Privacy</Typography>
        <Typography>Employee Incentive</Typography>
        <Typography>Employee</Typography> */}
        </Box>
        <Box>
          <Typography gutterBottom variant="h5">
            Sectors
          </Typography>
          <Typography>Business</Typography>
          <Typography>Disputes</Typography>
          <Typography>Immigration</Typography>
          <Typography>Law</Typography>
          <Typography>Commercial</Typography>
          <Typography>Property</Typography>
        </Box>
        <Box>
          <Typography gutterBottom variant="h5">
            Services
          </Typography>
          <Typography>Business</Typography>
          <Typography>Disputes</Typography>
          <Typography>Immigration</Typography>
          <Typography>Law</Typography>
          <Typography>Commercial</Typography>
          <Typography>Property</Typography>
        </Box>
        <Box
          sx={{
            width: 200,
            heught: 200,
          }}
        >
          <img src={illustrlaw} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            p: "5px",
            m: "50px",
            gap: 10,
          }}
        >
          <Link href="#" underline="none" color="red">
            <SocialIcon url={socialMediaHandlesLinks.twitter} />
          </Link>
          <Link href="#" underline="none">
            <SocialIcon url={socialMediaHandlesLinks.instagram} />
          </Link>
          <Link href="#" underline="none">
            <SocialIcon url={socialMediaHandlesLinks.linkedin} />
          </Link>
          <Link href="#" underline="none">
            <SocialIcon url={socialMediaHandlesLinks.facebook} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
