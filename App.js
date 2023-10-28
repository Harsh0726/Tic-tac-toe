import Board from "./components/Board";
import "./styles.css";

export default function App() {
  return (
    <div className="game">
      <h1>Tic-Tac-Toe</h1>
      {/* import board */}
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}