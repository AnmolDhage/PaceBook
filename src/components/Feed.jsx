import { makeStyles } from "@material-ui/core";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  }
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};

export default Feed;
