import React from "react";
import ReactHlsPlayer from "react-hls-player";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "250px",
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(1),
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "100%",
    },
  },
}));

const VideoBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ReactHlsPlayer
        url="https://streaming.intacs.com/clients/majestikmuzikradio/v/video.html"
        autoplay={false}
        controls={true}
        width="100%"
        height="auto"
      />
    </Box>
  );
};

export default VideoBox;
