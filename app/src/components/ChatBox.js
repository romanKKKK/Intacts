import React from "react";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(1),
      width:'100%'
    },
    [theme.breakpoints.up("lg")]:{
      maxWidth:'500px',
      width:'100%'
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
        src="https://www6.cbox.ws/box/?boxid=822052&boxtag=dATRC5"
      />
    </Box>
  );
};

export default ChatBox;
