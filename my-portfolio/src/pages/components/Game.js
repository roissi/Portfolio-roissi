import React, { useState, useEffect, useCallback } from "react";
import Square from "./Square";
import {
  Box,
  Button,
  Heading,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const Game = () => {
  const { t } = useTranslation("common");
  const [grid, setGrid] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const checkWinner = useCallback((grid) => {
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winCombinations) {
      const [a, b, c] = combination;
      if (grid[a] !== "" && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }

    if (!grid.includes("")) {
      return "Draw";
    }

    return null;
  }, []);

  const minimax = useCallback(
    (grid, depth, isMaximizingPlayer) => {
      const winner = checkWinner(grid);
      if (winner === "O") return { score: 10 - depth, move: null };
      if (winner === "X") return { score: depth - 10, move: null };
      if (!grid.includes("")) return { score: 0, move: null };

      if (isMaximizingPlayer) {
        let bestScore = -Infinity;
        let move;

        for (let i = 0; i < 9; i++) {
          if (grid[i] === "") {
            grid[i] = "O";
            let score = minimax(grid, depth + 1, false).score;
            grid[i] = "";
            if (score > bestScore) {
              bestScore = score;
              move = i;
            }
          }
        }

        return { score: bestScore, move: move };
      } else {
        let bestScore = Infinity;
        let move;

        for (let i = 0; i < 9; i++) {
          if (grid[i] === "") {
            grid[i] = "X";
            let score = minimax(grid, depth + 1, true).score;
            grid[i] = "";
            if (score < bestScore) {
              bestScore = score;
              move = i;
            }
          }
        }

        return { score: bestScore, move: move };
      }
    },
    [checkWinner],
  );

  useEffect(() => {
    if (!isPlayerTurn && winner === null && grid.includes("")) {
      setTimeout(() => {
        let move;
        let newGrid = [...grid];
        if (grid.every((value) => value === "")) {
          move = Math.floor(Math.random() * 9);
        } else {
          move = minimax(grid, 0, true).move;
        }
        newGrid[move] = "O";
        setGrid(newGrid);
        const checkResult = checkWinner(newGrid);
        if (checkResult === "O") {
          setWinner(t("game.fail"));
        } else if (checkResult === "Draw") {
          setWinner(t("game.draw"));
        }
        setIsPlayerTurn(true);
      }, 500);
    }
  }, [grid, winner, isPlayerTurn, minimax, t]);

  const handleClick = (index) => {
    if (grid[index] === "" && winner === null) {
      let newGrid = [...grid];
      newGrid[index] = "X";
      setGrid(newGrid);
      const checkResult = checkWinner(newGrid); // Modification
      if (checkResult === "X") {
        setWinner(t("game.win"));
      } else if (checkResult === "Draw") {
        // Modification
        setWinner(t("game.draw"));
      }
      setIsPlayerTurn(false);
    }
  };

  const resetGame = () => {
    setGrid(Array(9).fill(""));
    setWinner(null);
  };

  const direction = useBreakpointValue({
    base: "column-reverse",
    sm: "column-reverse",
    md: "column-reverse",
    "2xl": "row-reverse",
  });
  const boxPadding = useBreakpointValue({ base: 5, sm: 5, md: 20 });
  const paddingX = useBreakpointValue({ base: 6, sm: 6, md: 40 });

  return (
    <>
      <Heading
        as="h2"
        size="3xl"
        mb={10}
        textAlign="center"
        style={{
          textShadow: `-1px 0 #f73b68, 0 1px #f73b68, 5px 0 #f73b68, 0 -5px #f73b68`,
        }}
        id="game"
        paddingTop="100px"
        marginTop="-100px"
        bg="transparent"
      >
        {"LET'S PLAY !"}
      </Heading>

      <Flex
        direction={direction}
        justifyContent="center"
        alignItems="center"
        pt={6}
        px={paddingX}
      >
        <Box p={boxPadding} textAlign="center" m="auto">
          <Text fontSize="2xl" letterSpacing="wide">
            {t("game.message")}
          </Text>
        </Box>

        <Box textAlign="center" letterSpacing="wide">
          <Box>
            {[...Array(3)].map((_, i) => (
              <Flex key={i}>
                {[...Array(3)].map((_, j) => {
                  const index = i * 3 + j;
                  return (
                    <Square
                      key={index}
                      value={grid[index]}
                      isDisabled={grid[index] !== "" || winner !== null}
                      onClick={() => handleClick(index)}
                    />
                  );
                })}
              </Flex>
            ))}
            {winner && (
              <Box mt={4}>
                <Box fontWeight="bold" mb={2} fontSize="3xl">
                  {winner === "Draw" ? "Draw" : winner}
                </Box>
                <Button
                  onClick={resetGame}
                  bg="#f73b68"
                  _hover={{ bg: "#ed809a" }}
                  transition="background-color 0.2s"
                  color="#0e1a29"
                >
                  {t("game.reset")}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Game;
