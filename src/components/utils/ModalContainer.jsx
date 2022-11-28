import React from "react";
import styled from "styled-components";

const ModalContainerStyle = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 20px;
  height: 50vh;
  font-family: Monserrat, Open Sans, sans-serif;
`;

const ModalContainer = (props) => {
  return <ModalContainerStyle>{props.children}</ModalContainerStyle>;
};

export default ModalContainer;
