import React from "react";
import styled from "styled-components";
import { CgPokemon } from "react-icons/cg";
import { TbSettings } from "react-icons/tb";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  margin-right: 5px;
  display: flex;
  font-size: 20px;
  padding: 5px;
`;

const HeaderButton = styled.div`
  color: #414a5e;
  height: 34px;
  padding: 3px;
  margin-left: 10px;
  border-radius: 7px;
  background-color: #ebedf3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderFlex>
      <ButtonContainer>
        <HeaderButton>
          <CgPokemon />
          Pokedle
        </HeaderButton>
      </ButtonContainer>
      <ButtonContainer>
        <HeaderButton>
          <TbSettings />
        </HeaderButton>
        <HeaderButton>
          <HiOutlineQuestionMarkCircle />
        </HeaderButton>
      </ButtonContainer>
    </HeaderFlex>
  );
};

export default Header;
