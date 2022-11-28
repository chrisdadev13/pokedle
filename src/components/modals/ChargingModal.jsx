import React from "react";
import PokeballAnimation from "../utils/PokeballAnimation";
import ModalContainer from "../utils/ModalContainer";
import ModalContent from "../utils/ModalContent";
import HeaderModal from "../utils/HeaderModal";

const ChargingModal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <HeaderModal>
          <h3>Guess the Pokemon name</h3>
        </HeaderModal>
        <PokeballAnimation />
        <h3 style={{ fontWeight: "normal" }}>
          Please be patient, we are looking for a Pokemon name!
        </h3>
      </ModalContent>
    </ModalContainer>
  );
};

export default ChargingModal;
