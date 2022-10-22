import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { flexbox } from "@mui/system";
import { Grid } from "@mui/material";

const Team = () => {
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
  ];
  staffMembers.map((me) => console.log(me.name));
  //staffMembers.map((member) => {
    return (
    
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>

  
      <Box sx={{
      m:"20px",
      gap: 10,
      display: "flex",
      justifyContent: "center",
      md: 6,
      }}>
            <Grid item md={3} xs={12} sm={12} lg={3} xl={2}>
            <Box
        sx={{
          width: 300,
          height: 300,
          pt: "5%",
          borderRadius: 5,
          border: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Purity Kathambi Mbaabu
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" color="green">
                Lawyer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Nairobi
              </Typography>
            </Box>
          </Box>
      </Box>            

            </Grid>
            <Grid item md={3} xs={12} sm={12} lg={3} xl={2}>
            <Box
        sx={{
          width: 300,
          height: 300,
          pt: "5%",
          borderRadius: 5,
          border: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Purity Kathambi Mbaabu
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" color="green">
                Lawyer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Nairobi
              </Typography>
            </Box>
          </Box>
      </Box>            

            </Grid>
            <Grid item md={3} xs={12} sm={12} lg={3} xl={2}>
            <Box
        sx={{
          width: 300,
          height: 300,
          pt: "5%",
          borderRadius: 5,
          border: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Purity Kathambi Mbaabu
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" color="green">
                Lawyer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Nairobi
              </Typography>
            </Box>
          </Box>
      </Box>            

            </Grid>
            <Grid item md={3}>
            <Box
        sx={{
          width: 300,
          height: 300,
          pt: "5%",
          borderRadius: 5,
          border: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Purity Kathambi Mbaabu
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" color="green">
                Lawyer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Nairobi
              </Typography>
            </Box>
          </Box>
      </Box>            

            </Grid>
            <Grid item md={3} xs={12} sm={12} lg={3} xl={2}>
            <Box
        sx={{
          width: 300,
          height: 300,
          pt: "5%",
          borderRadius: 5,
          border: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Box>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Purity Kathambi Mbaabu
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" color="green">
                Lawyer
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" color="initial">
                Nairobi
              </Typography>
            </Box>
          </Box>
      </Box>            

            </Grid>
            </Box>
      
    </Grid>
  );
  //})
};

export default Team;
// {
//     staffMembers.map((member) => {
//       console.log(member.name);
//     });
// }
