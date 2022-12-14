import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Cardy from "../Card/Card";
import "./styles.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const services = [
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
  {
    name: "Search Engine Optimizaion",
    desc: "The following include my servicesThe following include my servicesThe following include my services",
  },
];

export default function Services() {
  return (
    <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
      {services.map((service) => (
        <Grid item xs={4} paddingLeft={10}>
          <div class="services-box">
            <i class="fa fa-rocket"></i>
            <span>{service.name}</span>
            <p>{service.desc}</p>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}
