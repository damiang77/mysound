import React from "react";
import Menu from "../components/Menu/Menu";
import LastSongs from "../components/LastSongs/LastSongs";
const MusicPage = () => {

    const bgColor = {
        background: "#F2F2F6",
      };
  return (
    <div className="container-flud" style={bgColor}>
   
     <Menu/>

      <div className="container">
        <div className="row">
    <LastSongs/>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
