import "./styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import { makeStyles } from "@material-ui/core";
import Grid from "@mui/material/Grid";
import LeftNavbar from "./components/LeftNavbar";
import Feed from "./components/Feed";
import RightNavbar from "./components/RightNavbar";
import Add from "./components/Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Navbar></Navbar>
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftNavbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightNavbar />
        </Grid>
      </Grid>
      <Add />
    </div>
  );
}
