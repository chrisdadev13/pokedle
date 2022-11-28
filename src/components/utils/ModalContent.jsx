import React from "react";
import styled from "styled-components";

const ModalContentStyle = styled.div`
  width: 580px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContent = (props) => {
  return <ModalContentStyle>{props.children}</ModalContentStyle>;
};

export default ModalContent;
