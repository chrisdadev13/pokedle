import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  z-index: 1; /* Sit on top */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 20px;
  height: 50vh;
`;

const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ChargingModal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Guess the Pokemon name</h2>
        <h3>Good Luck!!</h3>
      </ModalContent>
    </ModalContainer>
  );
};

export default ChargingModal;
