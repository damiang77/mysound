import React, {useContext} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {PlayerContext} from "./Context/PlayerContext";

const MusicPlayer = () => {

  const player = useContext(PlayerContext)

  const style = {
    position: "fixed",
    zIndex: "1000",
    bottom: player.isOpen ? "0px" : "-80px",
    left: "0px",
    height: "60px",
    width: "100%",
  };

  
  return (
    <>
      {player.isOpen ? (
        <div style={style}>
          <AudioPlayer
            src={player.audioSource}
            autoPlay
            layout="horizontal-reverse"
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default MusicPlayer;
