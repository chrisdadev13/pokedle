import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TilesGrid from "./Game/TilesGrid";
import KeysGrid from "./Keyboard/KeysGrid";

const GameContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KeyboardContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = () => {
  const TRIES = 6;
  const ID = Math.trunc(Math.random() * (900 - 1) + 1);
  const KEYBOARD = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["backspace", "z", "x", "c", "v", "b", "n", "m", "enter"],
  ];

  const [name, setName] = useState([]);
  const [difficulty, setDifficulty] = useState(5);
  const [tiles, setTile] = useState({
    0: Array.from({ length: difficulty }).fill(""),
    1: Array.from({ length: difficulty }).fill(""),
    2: Array.from({ length: difficulty }).fill(""),
    3: Array.from({ length: difficulty }).fill(""),
    4: Array.from({ length: difficulty }).fill(""),
    5: Array.from({ length: difficulty }).fill(""),
  });
  const [currentCol, setCol] = useState(0);
  const [currentRow, setRow] = useState(0);

  useEffect(() => {
    if (name.length !== difficulty)
      fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
        .then((res) => res.json())
        .then((data) => setName(data.name.toUpperCase().split("")));
  });

  return (
    <>
      <GameContainer>
        <TilesGrid tries={6} tiles={tiles} wordLength={difficulty} />
      </GameContainer>
      <KeyboardContainer>
        <KeysGrid keyboard={KEYBOARD} />
      </KeyboardContainer>
    </>
  );
};

export default Main;
