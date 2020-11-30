import React from "react";
import ReactHlsPlayer from "react-hls-player";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "250px",
    width: "100%",
    backgroundColor:'#000000',
  },
}));

const VideoBox = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <ReactHlsPlayer
        className={classes.root}
        url="https://586a9edea75f1.streamlock.net/caribbeanhot7tv/ch7-1.stream/playlist.m3u8"
        autoplay={true}
        controls={true}
      />
    </Box>
  );
};

export default VideoBox;
