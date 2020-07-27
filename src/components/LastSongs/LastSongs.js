import React from "react";
import styled from "styled-components";
import LastSong from "./LastSong";

const LastSongs = () => {
  const data = [
    {
      id: 1,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 2,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 3,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 4,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 5,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 6,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 7,
      title: "Chop suey",
      artist: "System of a Down",
    },
    {
      id: 8,
      title: "Chop suey",
      artist: "System of a Down",
    },
  ];

  const Container = styled.div`
    width: 100%;
    min-height: 700px;
    background-color: #fff;
  `;
  const Header = styled.h2`
    font-family: "Lato", sans-serif;
    font-size: 22px;
    color: #333333;
    text-align: center;
    margin: 1.5rem;
  `;

  const LastSongsContainer = styled.div`
    margin-left: 30px;
    margin-right: 30px;
  `;
  return (
    <Container>
      <Header>Listen last shared songs</Header>
      <LastSongsContainer>
        <div className="row">
          {data.map((lastsng) => {
            return <LastSong key={lastsng.id} {...lastsng} />;
          })}
        </div>
      </LastSongsContainer>
    </Container>
  );
};

export default LastSongs;
