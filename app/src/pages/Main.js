import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import ChatBox from "../components/ChatBox";
import VideoBox from "../components/VideoBox";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
    margin:0,
    height: "calc(100vh - 35px)",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <VideoBox />
      <ChatBox />
    </Box>
  );
};

export default Main;
