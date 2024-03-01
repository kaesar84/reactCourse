import { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";

const TURNS = {
  // turnos
  X: "❌",
  O: "⭕",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  // Los cambios de estado son asincronos
  // Estado para el teclado vacio, un array vacio
  //array board, formade actualizar --> use estate (estado inicial)
  const [board, setBoard] = useState(Array(9).fill(null));
  //Actualizar el tablero
  // Estado para determinar el turno
  const [turn, setTurn] = useState(TURNS.X);

  //null no hay ganador false empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadores
    // para ver si x u o ganó
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const checkEndGame = (newBoard) => {
    // revisamos si hay empate
    // si no hay espacios vacios
    return newBoard.every((square) => square != null);
  };


function confettiFireWorks() {
      let duration = 1 * 1000;
      let animationEnd = Date.now() + duration;
      let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      let interval = setInterval(function () {
        let timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        let particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);
}

  const updateBoard = (index) => {
    // no actualizamo posición si hay contenido, retun no hace nada
    if (board[index] || winner) return;

    // Actualizar el tablero
    // hay que hacer uno nuevo para no modificar el valor original
    const newBoard = [...board];
    newBoard[index] = turn; // x u o
    setBoard(newBoard);
    // Actualizar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confettiFireWorks()
      setWinner(newWinner);
      // TODO check if game is over
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tic Tact Toe </h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner != null && (
        <section className="winner">
          <div className="text">
            <h2>{winner == false ? "Empate" : "Ganó"}</h2>
            <header className="win">
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
