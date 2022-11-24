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

  @media only screen and (min-width: 900px) {
    width: 30vw;
  }
`;

const KeysGrid = ({ keyboard, onClick }) => {
  return (
    <Keyboard>
      <KeyboardRow>
        {keyboard[0].map((tile, i) => (
          <KeyBtn onClick={onClick} key={i} keyboardTile={tile}>
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboard[1].map((tile, i) => (
          <KeyBtn onClick={onClick} key={i} keyboardTile={tile}>
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboard[2].map((tile, i) => (
          <KeyBtn onClick={onClick} key={i} keyboardTile={tile}>
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
    </Keyboard>
  );
};

export default KeysGrid;
