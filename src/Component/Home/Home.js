import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Appbar from "../Appbar/Appbar";
import Services from "../Services/services";
import Footer from "../Footer/Footer";
import Contactus from "../ContactUs/Contactus";
import { Paper } from "@mui/material";
import Aboutus from "../Aboutus/Aboutus";
import Customer from "../Customer/Customer";
import Testimonials from "../Testimonials/Testimonial";
import "./style.css";

function App() {
  return (
    <Grid container>
      <Grid item md={12}>
        <Appbar />
      </Grid>
      <Grid item md={12}>
        <div>
          <div id="home" container className="herobann">
            <Box
              sx={{
                width: "50%",
                display: "flex",
                justifyContent: "start-end",
                ml: "50px",
              }}
            >
              <Typography
                mt={8}
                variant="h2"
                component="h2"
                sx={{
                  color: "white",
                }}
              >
                A modern law firm purpose built to support entrepreneurial
                businesses.
              </Typography>
            </Box>
            <Box>
              <button href="/" className="button">
                Free Consultation
              </button>
            </Box>
          </div>
        </div>
      </Grid>
      <Grid item md={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              width: "90%",
              height: "auto",
              m: "25px",
            }}
          >
            <Box
              id="services"
              sx={{
                m: "25px",
              }}
            >
              <Typography variant="h2" component="h2" align="center">
                Our Services
              </Typography>
              <Services />
            </Box>
          </Paper>
          {/* <Paper
            id="team"
            elevation={6}
            sx={{
              width: "90%",
              height: "auto",
              m: "25px",
            }}
          >
            <Typography variant="h2" component="h2" align="center">
              Our Team
            </Typography>
            <Tm />
          </Paper> */}
          <Paper
            id="customers"
            elevation={6}
            sx={{
              width: "90%",
              height: "400px",
              m: "25px",
            }}
          >
            <Typography gutterBottom variant="h2" component="h2" align="center">
              Customers
            </Typography>
            <Customer />
          </Paper>
          <Paper
            id="testimonials"
            elevation={6}
            sx={{
              width: "90%",
              height: "auto",
              m: "25px",
            }}
          >
            <Typography variant="h2" component="h2" align="center">
              Testimonials
            </Typography>
            <Testimonials />
          </Paper>
          <Paper
            id="about us"
            elevation={6}
            sx={{
              width: "90%",
              m: "25px",
            }}
          >
            <Typography variant="h2" component="h2" align="center">
              About Us
            </Typography>
            <Aboutus />
          </Paper>
          <Paper
            id="contact us"
            elevation={6}
            sx={{
              width: "90%",
              height: 500,
              m: "25px",
            }}
          >
            <Typography variant="h2" component="h2" align="center">
              Contact Us
            </Typography>
            <Contactus />
          </Paper>
        </Box>
      </Grid>
      <Box
        sx={{
          background:
            "linear-gradient(#ffffff, #000000),url(/src/images/heroImg.jpg)",
          width: "100%",
          height: 400,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Footer />
      </Box>
    </Grid>
  );
}

export default App;
