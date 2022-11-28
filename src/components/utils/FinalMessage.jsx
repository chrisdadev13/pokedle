import React from "react";
import styled from "styled-components";

const Message = styled.div`
  display: block;
  font-size: 12px;
  color: #363e52;
  padding: 0px 12px;
  border-radius: 20px;
  background-color: #edf0f7;
  text-align: center;
  width: max-content;
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -40px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
`;

const FinalMessage = ({ result, onClick }) => {
  return (
    <>
      {result === true ? (
        <Message onClick={onClick}>¡Ganaste! 🏆</Message>
      ) : (
        <Message onClick={onClick}>Perdiste, intenta de nuevo</Message>
      )}
    </>
  );
};

export default FinalMessage;
