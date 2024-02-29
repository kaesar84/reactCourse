import { useState } from "react";
import "./App.css";
// 16:09
const TURNS = {
  // turnos
  X: "x",
  O: "o",
};

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className= `square ${isSelected?'is-selected': ''}`
  return <div className={className}>
    {children}
    </div>;
};

function App() {
  // Estado para el teclado vacio, un array vacio
  //array board, formade actualizar --> use estate (estado inicial)
  const [board, setBoard] = useState(Array(9).fill(null));

  // Estado para determinar el turno
  const [turn, setTurn] = useState(TURNS.X);

  return (
    <main className="board">
      <h1>Tic Tact Toe</h1>

      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
