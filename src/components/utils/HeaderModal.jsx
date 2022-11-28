import React from "react";
import styled from "styled-components";

const HeaderModalStyle = styled.div`
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

const HeaderModal = (props) => {
  return <HeaderModalStyle>{props.children}</HeaderModalStyle>;
};

export default HeaderModal;
