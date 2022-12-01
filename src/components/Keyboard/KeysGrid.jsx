import React from "react";
import styled from "styled-components";
import KeyBtn from "./KeyBtn";

const Keyboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; ;
`;

const KeyboardRow = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  width: 100vw;
  height: 6.5vh;
  margin: 2px 0;

  @media only screen and (min-width: 1100px) {
    width: 35vw;
  }
`;

const KeysGrid = ({
  keyboard,
  onClick,
  guessedData,
  elsewhereData,
  failedData,
}) => {
  return (
    <Keyboard>
      <KeyboardRow>
        {keyboard[0].map((tile, i) => (
          <KeyBtn
            onClick={onClick}
            key={i}
            guessedArr={guessedData}
            elsewhereArr={elsewhereData}
            failedArr={failedData}
            keyboardTile={tile}
          >
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboard[1].map((tile, i) => (
          <KeyBtn
            onClick={onClick}
            key={i}
            guessedArr={guessedData}
            elsewhereArr={elsewhereData}
            failedArr={failedData}
            keyboardTile={tile}
          >
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboard[2].map((tile, i) => (
          <KeyBtn
            onClick={onClick}
            key={i}
            guessedArr={guessedData}
            elsewhereArr={elsewhereData}
            failedArr={failedData}
            keyboardTile={tile}
          >
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
    </Keyboard>
  );
};

export default KeysGrid;
