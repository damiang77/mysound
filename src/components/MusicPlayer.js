import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayer = ({ musicUrl, isPlayerOpen, title }) => {
  const style = {
    position: "absolute",
    bottom: isPlayerOpen ? "0px" : "-80px",
    left: "0px",
    height: "90px",
    width: "100%",
  };

  return (
    <div>
      {isPlayerOpen ? (
        <div style={style}>
          <AudioPlayer
            src={musicUrl}
            autoPlay
            layout="horizontal-reverse"
            header={title}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MusicPlayer;
