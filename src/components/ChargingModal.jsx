import React from "react";
import styled from "styled-components";
import PokeballAnimation from "./utils/PokeballAnimation";

const ModalContainer = styled.div`
  z-index: 1; /* Sit on top */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 20px;
  height: 50vh;
  font-family: Monserrat, Open Sans, sans-serif;
`;

const ModalContent = styled.div`
  width: 580px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderModal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background-color: #e5ecff;
  height: 5vh;
  margin-bottom: 20px;
  font-family: Monserrat, Open Sans, sans-serif;
`;

const ChargingModal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <HeaderModal>
          <h3>Guess the Pokemon name</h3>
        </HeaderModal>
        <PokeballAnimation />
        <h4>Please be patient, we are looking for a Pokemon name!</h4>
      </ModalContent>
    </ModalContainer>
  );
};

export default ChargingModal;
