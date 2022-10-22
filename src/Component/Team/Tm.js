import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Tm = () => {
  const staffMembers = [
    {
      name: "John Kyle",
      professional: "Lawyer",
      Age: 36,
    },
    {
      name: "vicky vine",
      professional: "Lawyer",
      Age: 36,
    },
    {
      name: "John Kyle",
      professional: "Lawyer",
      Age: 36,
    },
    {
      name: "John Kyle",
      professional: "Lawyer",
      Age: 36,
    },
    {
      name: "vicky vine",
      professional: "Lawyer",
      Age: 36,
    },
    {
      name: "John Kyle",
      professional: "Lawyer",
      Age: 36,
    },
    {
      name: "John Kyle",
      professional: "Lawyer",
      Age: 36,
    },
  ];

  return (
    <Grid
      container
      sx={{
        m: "20px",
      }}
    >
      {staffMembers.map((me) => (
        <Grid item md={4}>
          <Box
            sx={{
              width: 250,
              height: 250,
              pt: "5%",
              borderRadius: 5,
              border: 1,
              mb: "25px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" color="initial">
                  {me.name}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h6" color="green">
                  {me.professional}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h5" color="initial">
                  {me.Age}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Tm;
