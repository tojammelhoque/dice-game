import React from "react";

function Rules() {
  return (
    <div className="rules bg-[#fbf1f1] p-5 max-w-[800px] mx-auto mt-5">
      <h2 className="text-2xl  mb-4">How to Play Dice Game</h2>
      <p>
        Select a number from 1 to 6 <br />
        Click on the dice to roll <br />
        If you roll the Dice and selected number is equal to the Dice number,
        you get 1 point. Otherwise,
        <br /> you lose 2 points
      </p>
    </div>
  );
}

export default Rules;
