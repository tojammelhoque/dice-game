function StartGame({ toggleGame }) {
  return (
    <div className="flex justify-center items-center h-screen gap-20">
      <div className="image">
        <img src="images/dices.png" alt="" />
      </div>
      <div className="text">
        <h1 className="text-[96px] font-bold">DICE GAME</h1>
        <button
          onClick={toggleGame}
          className="px-56 py-4 bg-black text-white rounded text-lg"
        >
          Play Now
        </button>
      </div>
    </div>
  );
}

export default StartGame;
