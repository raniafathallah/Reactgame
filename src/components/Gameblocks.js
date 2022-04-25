import React, { useContext } from "react";
import Sentencecontext from "./context";
import RenderInputs from "./RenderInputs";
const Gameblocks = () => {
  const { chars, nextBtn, setNextBtn, score, setUrl } =
    useContext(Sentencecontext);
  const setNextSentence = () => {
    if (score < 10) {
      const count = score + 1;
      const newUrl = `https://api.hatchways.io/assessment/sentences/${count}`;
      const state = false;
      setNextBtn(state);
      setUrl(newUrl);
    }
  };
  return (
    <>
      <h3 style={{ textAlign: "center" }} data-testid="score_id">
        {" "}
        Score : {score}
      </h3>
      {chars.length > 0 && (
        <div className="allCharsContainer">
          <RenderInputs />
        </div>
      )}
      <div className="nextbtnContainer">
        {nextBtn && (
          <button
            onClick={setNextSentence}
            style={{ display: "block" }}
            className="nextBtn"
            data-testid="next_btn"
          >
            Next
          </button>
        )}
      </div>

      {score === 10 && (
        <div className="iswinnerContainer">
          {" "}
          <p data-testid="win_text"> You win! </p>
        </div>
      )}
    </>
  );
};

export default Gameblocks;
