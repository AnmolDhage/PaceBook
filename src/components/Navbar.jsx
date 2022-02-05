import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { makeStyles } from "@material-ui/core";
import { alpha } from "@mui/material/styles";
//import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) => ({
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: theme.palette.primary.dark
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: "5px",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none")
    }
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2)
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center"
  },
  badge: {
    marginRight: theme.spacing(3)
  },
  searchBtn: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  canBtn: {
    marginRight: 5,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logoLg}>
          PaceBook
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          PaceBook
        </Typography>
        <div className={classes.search}>
          <SearchIcon style={{ marginLeft: 5 }} />
          <InputBase placeholder="Search" className={classes.input} />
          <div className={classes.canBtn} onClick={() => setOpen(false)}>
            <CancelIcon />
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.searchBtn} onClick={() => setOpen(!open)}>
            <SearchIcon />
          </div>

          <Badge
            color="secondary"
            badgeContent={100}
            max={99}
            className={classes.badge}
          >
            <MailIcon />
          </Badge>
          <Badge
            color="secondary"
            badgeContent={1}
            max={99}
            className={classes.badge}
          >
            <NotificationsActiveIcon />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
