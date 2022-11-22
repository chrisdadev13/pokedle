import React from "react";
import styled from "styled-components";
import KeyBtn from "./KeyBtn";

const Keyboard = styled.div`
  width: 30vw;
`;

const KeyboardRow = styled.div`
  display: flex;
  justify-content: stretch;
  flex-direction: row;
  width: 100%;
  height: 6.5vh;
`;

const KeysGrid = ({ keyboard, onClick }) => {
  return (
    <Keyboard>
      <KeyboardRow>
        {keyboard[0].map((tile) => (
          <KeyBtn onClick={onClick} keyboardTile={tile}>
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboard[1].map((tile) => (
          <KeyBtn onClick={onClick} keyboardTile={tile}>
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
      <KeyboardRow>
        {keyboard[2].map((tile) => (
          <KeyBtn onClick={onClick} keyboardTile={tile}>
            {tile}
          </KeyBtn>
        ))}
      </KeyboardRow>
    </Keyboard>
  );
};

export default KeysGrid;
