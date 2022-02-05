import { makeStyles } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    overflow: "auto",
    position: "sticky",
    top: 0,
    color: "white",
    backgroundColor: theme.palette.primary.dark,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      border: "1px solid #F6EEEC"
    }
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(4),
      cursor: "pointer"
    }
  },
  icon: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px"
    }
  },
  text: {
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));

const LeftNavbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <HomeIcon className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <PersonIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <FormatListBulletedIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <CameraAltIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <SlowMotionVideoIcon className={classes.icon} />
        <Typography className={classes.text}>Video</Typography>
      </div>
      <div className={classes.item}>
        <PhoneAndroidIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <LogoutIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
};

export default LeftNavbar;
