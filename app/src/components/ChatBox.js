import React from "react";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width:'100%'
    },
    [theme.breakpoints.up("lg")]:{
      maxWidth:'500px',
    }
  },
  content: {
    display: "flex",
    width: "100%",
  },
}));

const ChatBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <iframe
        title="Chat"
        className={classes.content}
        src="https://my.cbox.ws/upwok"
      />
    </Box>
  );
};

export default ChatBox;
