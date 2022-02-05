import { React, useState } from "react";
import {
  Button,
  makeStyles,
  Snackbar,
  TextField,
  Typography
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import { Alert } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 250,
    height: 500,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      widht: "100vw",
      height: "100vh"
    }
  },
  form: {
    padding: theme.spacing(2)
  },
  item: {
    margin: theme.spacing(5)
  }
}));

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <Fab color="primary" sx={{ position: "fixed", bottom: 10, right: 10 }}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <Typography
            variant="h4"
            style={{ textAlign: "center", paddingTop: 10, fontWeight: "bold" }}
          >
            Create Post
          </Typography>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Description"
                defaultValue="Tell us Your Story..."
                variant="outlined"
                multiline
                rows={8}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: 5 }}
                onClick={() => setOpenAlert(true)}
              >
                Post
              </Button>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "green",
            fontWeight: "bold"
          }}
        >
          New Post Added!!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Add;
