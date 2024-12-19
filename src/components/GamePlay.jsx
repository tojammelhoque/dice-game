import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const roleDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");
      return;
    }

    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice((prev) => randomNumber);

    if (randomNumber === selectedNumber) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <div className="flex justify-around items-center">
        <TotalScore score={score} />
        <NumberSelector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="flex justify-center items-center flex-col mt-12 gap-3 ">
        <button
          onClick={resetScore}
          className="px-10 py-4 border border-black rounded text-lg"
        >
          Reset Score
        </button>

        <button
          onClick={() => setShowRules((prev) => !prev)}
          className="px-10 py-4 bg-black text-white rounded text-lg"
        >
          {showRules ? "Hide Rules" : "Show Rules"} Show Rules
        </button>
        {showRules && <Rules />}
      </div>
    </>
  );
}

export default GamePlay;
