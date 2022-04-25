import React from "react";
const Topbar = ({ scrambleSentence }) => {
  return (
    <>
      <p className="scrambleSentence" data-testid="sramble_text">
        {" "}
        {scrambleSentence}
      </p>
      <h5 className="hintText" data-testid="static_text1_id">
        Guess the sentence ! Starting typing{" "}
      </h5>
      <h5 className="hintText" data-testid="static_text2_id">
        {" "}
        the yellow blocks are meant by spaces{" "}
      </h5>
    </>
  );
};

export default Topbar;
