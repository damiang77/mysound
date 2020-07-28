import React, {useContext} from "react";
import styled from "styled-components";
import placeholder from "../../assets/placeholder.jpg";
import play from "../../assets/play.png";
import {PlayerContext} from "../../Context/PlayerContext";

const LastSong = ({ title, artist, img, audioSource }) => {

    const player = useContext(PlayerContext)

  const Play = styled.img`
    position: absolute;
    display: none;
  `;
  const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover ${Play} {
      display: block;
    }
  `;
  const Img = styled.img`
    width: 160px;
    height: 160px;
  `;

  const Title = styled.h5`
    color: #333333;
    font-size: 14px;
    margin-top: 5px;
    margin-bottom: 0px;
    padding: 0;
  `;
  const Artist = styled.p`
    color: #999999;
    font-size: 14px;
    margin-top: 0px;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const WrapperInside = styled.div`
    max-width: 160px;
  `;

  return (
    <div className="col-xl-2 col-md-3 col-sm-4">
      <Wrapper>
        <WrapperInside>
          <ImgWrapper>
            <Img src={img ? img : placeholder} />
            <Play src={play} onClick={player.togglePlayer}/>
          </ImgWrapper>
          <Title>{title}</Title>
          <Artist>{artist}</Artist>
        </WrapperInside>
      </Wrapper>
    </div>
  );
};

export default LastSong;
