import React, { useState } from "react";
import Home from "./pages/Home";
import Sentencecontext from "./components/context";
const App = () => {
  const [chars, setChars] = useState([]);
  const [sentence, setSentence] = useState("");
  const [score, setScore] = useState(0);
  const [nextBtn, setNextBtn] = useState(false);
  const [url, setUrl] = useState(
    `https://api.hatchways.io/assessment/sentences/1`
  );

  return (
    <>
      <Sentencecontext.Provider
        value={{
          chars,
          setChars,
          sentence,
          setSentence,
          score,
          setScore,
          nextBtn,
          setNextBtn,
          url,
          setUrl,
        }}
      >
        <Home />
      </Sentencecontext.Provider>
    </>
  );
};

export default App;
