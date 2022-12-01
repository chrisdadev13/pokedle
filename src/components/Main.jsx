import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TilesGrid from "./Game/TilesGrid";
import KeysGrid from "./Keyboard/KeysGrid";
import Header from "./Header";
import Confetti from "react-confetti";
import ChargingModal from "./modals/ChargingModal";
import FinalMessage from "./utils/FinalMessage";

const GameContainer = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KeyboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Main = () => {
  const TRIES = 6;
  const ID = Math.trunc(Math.random() * (900 - 1) + 1);
  const KEYBOARD = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"],
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

  const [winner, setWinner] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const [userPlay, setPlay] = useState(
    Array.from({ length: difficulty }).fill("")
  );

  const [guessed, setGuessed] = useState([]);
  const [elsewhere, setElsewhere] = useState([]);
  const [failed, setFailed] = useState([]);

  const addLetter = (letter) => {
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
  };

  const removeLetter = () => {
    setTile((prev) =>
      prev.map((arr, i) => {
        if (i !== currentRow) return arr;
        return arr.map((_tile, index) => {
          if (index !== currentCol) return _tile;
          const newTile = structuredClone(_tile);
          newTile.space = "";
          return newTile;
        });
      })
    );
    setCol(currentCol >= 0 ? currentCol - 1 : (currentCol = currentCol));
  };

  const isValidLetter = (key) => {
    return (
      key !== "backspace" &&
      key !== "enter" &&
      currentCol < 5 &&
      winner === false
    );
  };

  const isValidEnter = (key) => {
    return (
      key === "enter" && currentCol > 4 && currentRow < 6 && winner === false
    );
  };

  const isValidBackspace = (key) => {
    return key === "backspace" && currentCol >= 0;
  };

  const handleKeyClick = (event) => {
    const letter = event.target.id;
    if (isValidLetter(letter)) {
      addLetter(letter);
    } else if (isValidEnter(letter)) {
      handleEnter();
      if (currentRow === 5) setGameOver(true);
    } else if (isValidBackspace(letter)) {
      removeLetter(letter);
    }
  };

  const createParallel = () => {
    setPlay((prev) =>
      prev.map((arr, i) => {
        const _play = structuredClone(tiles[currentRow][i].space);
        return _play;
      })
    );
  };

  const changeStatus = (letter, name, tiles, index, row) => {
    if (name.some((n) => n === letter)) {
      const direction = name.findIndex((n) => n === letter);
      if (
        direction === index ||
        name.findIndex((n, i) => n === letter && i !== direction) === index
      ) {
        return (tiles[row][index].status = "guessed");
      } else {
        return (tiles[row][index].status = "elsewhere");
      }
    } else {
      return (tiles[row][index].status = "fail");
    }
  };

  const evaluateParallels = () => {
    setPlay((prev) =>
      prev.map((arr, i) => {
        const _play = structuredClone(tiles[currentRow][i].space);
        changeStatus(_play, name, tiles, i, currentRow);
        if (tiles[currentRow].every((n) => n.status === "guessed")) {
          setWinner(true);
          setGameOver(true);
        }
        tiles[currentRow].forEach((tile) => {
          if (tile.status === "guessed") {
            if (!guessed.some((n) => n === tile.space))
              setGuessed((prev) => [...prev, tile.space]);
          } else if (tile.status === "elsewhere") {
            if (!elsewhere.some((n) => n === tile.space))
              setElsewhere((prev) => [...prev, tile.space]);
          } else if (tile.status === "fail") {
            if (!failed.some((n) => n === tile.space))
              setFailed((prev) => [...prev, tile.space]);
          }
        });
        return _play;
      })
    );
  };

  useEffect(() => {
    console.log(guessed);
    console.log(elsewhere);
    console.log(failed);
  }, [guessed, elsewhere, failed]);

  const handleEnter = () => {
    createParallel();
    evaluateParallels();
    setRow(currentRow + 1);
    setCol(currentCol - 5);
    if (currentRow === 5) setGameOver(true);
  };

  const isValidKeyDown = (keyPressed) => {
    if (KEYBOARD[0].some((n) => n === keyPressed)) return true;
    if (KEYBOARD[1].some((n) => n === keyPressed)) return true;
    if (KEYBOARD[2].some((n) => n === keyPressed)) return true;
  };

  const handleKeyDown = (event) => {
    let keyPressed = event.key.toLowerCase();
    if (isValidKeyDown(keyPressed)) {
      if (isValidLetter(keyPressed)) {
        addLetter(keyPressed);
      } else if (isValidEnter(keyPressed)) {
        handleEnter();
      } else if (isValidBackspace(keyPressed)) {
        removeLetter();
      }
    }
  };

  useEffect(() => {
    if (name.length !== difficulty)
      fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`)
        .then((res) => res.json())
        .then((data) => setName(data.name.toLowerCase().split("")));
  });

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      {name.length !== difficulty ? (
        <ChargingModal />
      ) : (
        <>
          <Header />
          <GameContainer>
            <TilesGrid tiles={tiles} difficulty={difficulty} />
          </GameContainer>
          {gameOver === true ? (
            <FinalMessage
              onClick={() => window.location.reload()}
              result={winner}
            />
          ) : (
            ""
          )}
          <KeyboardContainer>
            <KeysGrid
              keyboard={KEYBOARD}
              guessedData={guessed}
              elsewhereData={elsewhere}
              failedData={failed}
              onClick={handleKeyClick}
            />
          </KeyboardContainer>
        </>
      )}

      {winner === true && <Confetti width={2000} height={1000} />}
    </>
  );
};

export default Main;
