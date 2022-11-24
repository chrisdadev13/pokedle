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

  const [tiles, setTile] = useState([
    Array.from({ length: difficulty }).fill({ space: "", status: "neutro" }),
    Array.from({ length: difficulty }).fill({ space: "", status: "neutro" }),
    Array.from({ length: difficulty }).fill({ space: "", status: "neutro" }),
    Array.from({ length: difficulty }).fill({ space: "", status: "neutro" }),
    Array.from({ length: difficulty }).fill({ space: "", status: "neutro" }),
    Array.from({ length: difficulty }).fill({ space: "", status: "neutro" }),
  ]);

  const [currentCol, setCol] = useState(0);
  const [currentRow, setRow] = useState(0);

  const [gameOver, setGameOver] = useState(false);

  const [userPlay, setPlay] = useState(
    Array.from({ length: difficulty }).fill("")
  );

  function handleKeyClick(event) {
    const letter = event.target.id;
    if (letter !== "backspace" && letter !== "enter" && currentCol < 5) {
      setTile((prev) =>
        prev.map((arr, i) => {
          if (i !== currentRow) return arr;
          return arr.map((_tile, index) => {
            if (index !== currentCol) return _tile;
            const newTile = structuredClone(_tile);
            newTile.space = letter;
            return newTile;
          });
        })
      );

      setCol(currentCol + 1);
    } else if (letter === "enter" && currentCol > 4) {
      createParallel();
      evaluateParallels();
      setRow(currentRow + 1);
      setCol(currentCol - 5);
    }
  }

  function createParallel() {
    setPlay((prev) =>
      prev.map((arr, i) => {
        const _play = structuredClone(tiles[currentRow][i].space);
        return _play;
      })
    );
  }

  function changeStatus(letter, name, tiles, index, row) {
    if (name.some((n) => n === letter)) {
      const direction = name.findIndex((n) => n === letter);
      if (direction === index) {
        return (tiles[row][index].status = "guessed");
      } else {
        return (tiles[row][index].status = "elsewhere");
      }
    } else {
      return (tiles[row][index].status = "fail");
    }
  }

  function evaluateParallels() {
    setPlay((prev) =>
      prev.map((arr, i) => {
        const _play = structuredClone(tiles[currentRow][i].space);
        changeStatus(_play, name, tiles, i, currentRow);
        return _play;
      })
    );
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    if (name.length !== difficulty)
      fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
        .then((res) => res.json())
        .then((data) => setName(data.name.toLowerCase().split("")));
  });

  return (
    <>
      <GameContainer>
        <TilesGrid tries={6} tiles={tiles} wordLength={difficulty} />
      </GameContainer>
      <KeyboardContainer>
        <KeysGrid keyboard={KEYBOARD} onClick={handleKeyClick} />
      </KeyboardContainer>
    </>
  );
};

export default Main;
