import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import abtlawwfirm from "../../images/Lawfirmamico.svg";

const Aboutus = () => {
  return (
    <Grid container>
      <Grid item md={6}>
        <img
          className="imgAbt"
          width={450}
          height={450}
          alt="Legal Firm"
          src={abtlawwfirm}
        />
      </Grid>
      <Grid item md={6}>
        <Box
          sx={{
            width: "70%",
            height: 300,
            display: "flex",
            justifyItems: "center",
            margin: "55px 35px",
          }}
        >
          <Typography>
            Harper James Solicitors is a new breed of commercial law firm. A law
            firm designed to support ambitious businesses from start-up to
            scale-up. Harper James Solicitors is a new breed of commercial law
            firm. A law firm designed to support ambitious businesses from
            start-up to scale-up. Harper James Solicitors is a new breed of
            commercial law firm. A law firm designed to support ambitious
            businesses from start-up to scale-up.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Aboutus;
