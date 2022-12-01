import React from "react";
import styled from "styled-components";
import { MdOutlineBackspace } from "react-icons/md";

const KeyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  ${(props) => {
    if (props.guessed.some((n) => n === props.tile)) {
      return `
    background-color: #79b851;
    border: 2px solid #79b851;
    color: white;
    `;
    } else if (props.elsewhere.some((n) => n === props.tile)) {
      return `
    background-color: #f3c237;
    border: 2px solid #f3c237;
    color: white;
    `;
    } else if (props.failed.some((n) => n === props.tile)) {
      return `
      background-color: #a4aec4;
      border: 2px solid #a4aec4;
      color: white;
    `;
    } else {
      return `
        border: 2px solid #dce1ed;
        background-color: #dce1ed;
        color: black;
    `;
    }
  }}
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

const KeyBtn = ({
  keyboardTile,
  onClick,
  guessedArr,
  elsewhereArr,
  failedArr,
}) => {
  return (
    <KeyButton
      onClick={onClick}
      guessed={guessedArr}
      elsewhere={elsewhereArr}
      failed={failedArr}
      tile={keyboardTile}
      id={keyboardTile}
    >
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
