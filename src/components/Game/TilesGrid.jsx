import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
}

`;

const Tile = styled.div`
  ${(props) => {
    if (props.status === "neutro") {
      return `
      background-color: #fbfcff;
    `;
    } else if (props.status === "elsewhere") {
      return `
        background-color: #f3c237;
        border: 2px solid #f3c237 !important;
        color: white !important;
    `;
    } else if (props.status === "guessed") {
      return `
        background-color: #79b851; 
        border: 2px solid #79b851 !important;
        color: white !important;
    `;
    } else {
      return `
        background-color: #a4aec4 !important;
        border: 2px solid #a4aec4 !important;
        color: white !important;
      `;
    }
  }}
  color: #393e4c;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => (props.letter === "" ? "#dee1e9" : "#a7adc0")};
  border-radius: 5px;
  text-transform: uppercase;
  width: 56px;
  height: 56px;
  font-size: 28px;
  font-weidght: 700;
  animation: ${(props) =>
      props.letter !== "" || props.status !== "neutro" ? bounce : ""}
    0.25s linear;
`;

const TilesContainer = styled.div`
  width: 17vw;
  height: 42vh;
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const TilesGrid = ({ tries, tiles, wordLength }) => {
  return (
    <TilesContainer cols={wordLength}>
      {[0, 1, 2, 3, 4, 5].map((rows) => (
        <React.Fragment key={rows}>
          {[0, 1, 2, 3, 4].map((cols) => (
            <Tile
              key={cols}
              status={tiles[rows][cols].status}
              letter={tiles[rows][cols].space}
            >
              {tiles[rows][cols].space}
            </Tile>
          ))}
        </React.Fragment>
      ))}
    </TilesContainer>
  );
};

export default TilesGrid;
