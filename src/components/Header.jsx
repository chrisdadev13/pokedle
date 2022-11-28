import React from "react";
import styled from "styled-components";
import { CgPokemon } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 580px;
`;

const ButtonContainer = styled.div`
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const HeaderButton = styled.div`
  color: #414a5e;
  width: 30px;
  height: 30px;
  padding: 3px;
  margin-left: 10px;
  border-radius: 7px;
  background-color: #ebedf3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s linear;
  &:hover {
    color: #57ac57;
    background-color: #e6f3e6;
  }
`;

const Header = ({ onClickSettings, onClickHelp }) => {
  return (
    <HeaderContainer>
      <HeaderFlex>
        <ButtonContainer>
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            {" "}
            <CgPokemon />
            Pokedle
          </h3>
        </ButtonContainer>
        <ButtonContainer>
          <HeaderButton onClick={onClickSettings}>
            <h2
              style={{
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TbSettings />
            </h2>
          </HeaderButton>
          <HeaderButton onClick={onClickHelp}>
            <h2
              style={{
                fontSize: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <HiOutlineQuestionMarkCircle />
            </h2>
          </HeaderButton>
        </ButtonContainer>
      </HeaderFlex>
    </HeaderContainer>
  );
};

export default Header;
