import React from "react";
import styled from "styled-components";
import { MdOutlineBackspace } from "react-icons/md";

const KeyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 4px;
  background-color: #dce1ed;
  color: black;
  cursor: pointer;
  user-select: none;
  flex: ${(props) =>
      props.tile === "backspace" || props.tile === "enter" ? 2 : 1}
    1;
  font-size: 17px;
  font-weight: 700;
  margin: 3px;
  min-height: 46px;
  padding: 3px;
  text-decoration: inherit;
  text-transform: capitalize;
  transition: 0.2s;
  &:hover {
    background-color: #c4cbdd;
  }
`;

const KeyBtn = ({ keyboardTile, onClick }) => {
  return (
    <KeyButton onClick={onClick} tile={keyboardTile} id={keyboardTile}>
      {keyboardTile === "backspace" ? (
        <h2>
          <MdOutlineBackspace />
        </h2>
      ) : (
        keyboardTile
      )}
    </KeyButton>
  );
};

export default KeyBtn;
