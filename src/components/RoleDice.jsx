function RoleDice({ currentDice, roleDice }) {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-12">
        <div onClick={roleDice}>
          <img
            className="cursor-pointer"
            src={`images/dice/dice_${currentDice}.png`}
            alt={`Dice showing ${currentDice}`}
          />
        </div>
        <p className="text-2xl font-medium mt-4">Click on Dice to Roll</p>
      </div>
    </>
  );
}

export default RoleDice;
