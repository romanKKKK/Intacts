import React from "react";
import ReactPlayer from "react-player";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "250px",
    width: "100%",
    backgroundColor: "#000000",
    alignItems:'center'
  },
}));

const VideoBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ReactPlayer
        className={classes.root}
        url="https://586a9edea75f1.streamlock.net/caribbeanhot7tv/ch7-1.stream/playlist.m3u8"
        playing
        controls
        playsinline
        width="100%"
        height="auto"
      />
    </Box>
  );
};

export default VideoBox;
