import "../App.css";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { v4 as uuid } from "uuid";
import Sentencecontext from "../components/context";
import { shuffleWord } from "../components/utilities/functions";
import Topbar from "../components/Topbar";
import Gameblocks from "../components/Gameblocks";
function Home() {
  const { chars, setChars, sentence, setSentence, url, setUrl, score } =
    useContext(Sentencecontext);
  const [scrambleSentence, setScrambleSentence] = useState("");
  const [sentenceChage, setsentenceChage] = useState("notchanged");

  const fetchdata = async () => {
    if (score === 0) {
      const count = score + 1;
      const newUrl = `https://api.hatchways.io/assessment/sentences/${count}`;
      setUrl(newUrl);
    }
    const { data } = await axios.get(url);
    setSentence(data.data.sentence.toLowerCase());  
    const scramble = processSentence(data.data.sentence.toLowerCase());
    setScrambleSentence(scramble);
    const change = `changed+${score}`;
    setsentenceChage(change);
  };
  useEffect(() => {
    fetchdataFun();
  }, [url, sentenceChage]);

  useEffect(() => {
    const newChars = [];
    setChars(newChars);
  }, [url]);

  const fetchdataFun = () => {
    fetchdata().then(createInputsAsSentence(sentence));
  };
  const [wordsize, setWordsize] = useState([]);
  const processSentence = (sentence) =>
    sentence
      .split(/("[^"]+"|[^"\s]+)/g)
      .map(shuffleWord)
      .join("");
  const createInputsAsSentence = (sentence) =>
    sentence.split(/("[^"]+"|[^"\s]+)/g).map(wordAsInputs);
  const wordAsInputs = (word) => {
    if (word !== "") {
      if (word === " ") {
        const unique_id = uuid();
        const charObj = {
          id: unique_id,
          element: " ",
          solved: false,
          width:
            chars[chars.length - 1].width + 1 * wordsize[wordsize.length - 1],
        };
        const newChars = chars;
        newChars.push(charObj);
        setChars(newChars);
      } else {
        for (let index = 0; index < word.length; index++) {
          const unique_id = uuid();
          const element = word[index];
          const charObj = {
            id: unique_id,
            element: element,
            solved: false,
            width: 100 / (word.length + 1) - 2,
          };
          const newChars = chars;
          newChars.push(charObj);
          setChars(newChars);
        }

        const newSizes=wordsize;
        newSizes.push(word.length);
        setWordsize(newSizes);
      }
    }
  };

  return (
    <>
      <div className="App">
        <Topbar scrambleSentence={scrambleSentence} />
        <Gameblocks />
      </div>
    </>
  );
}

export default Home;
