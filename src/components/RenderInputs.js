import React, { useMemo, useState, useContext, useEffect } from "react";
import Sentencecontext from "./context";
import "../App.css";

const RenderInputs = () => {
  const { chars, setNextBtn, score, setScore } = useContext(Sentencecontext);

  const length = chars.length;

  const inputRefs = useMemo(
    () =>
      Array(length)
        .fill(0)
        .map((i) => React.createRef()),
    [length]
  );
  const [style, setStyle] = useState([]);

  const handleChange = (index) => (e) => {
    if (inputRefs[index + 1]) inputRefs[index + 1].current.focus();
    if (inputRefs[index].current.value === chars[index].element) {
      const stless = [...style, true];
      setStyle(stless);
      if (
        chars.length - 1 === index &&
        score < 10 &&
        checkSentenceCorrection()
      ) {
        const newScore = score + 1;
        setScore(newScore);
        const state = true;
        setNextBtn(state);
      }
    } else {
      const stless = [...style, false];
      setStyle(stless);
    }
  };

  const checkSentenceCorrection = () => {
    for (let index = 0; index < style.length; index++) {
      if (style[index] === false) {
        return false;
      }
    }
    return true;
  };
  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  return (
    <>
      <span style={{ marginBottom: "10px" }}>
        {length &&
          new Array(length).fill(0).map((inp, index) => (
            <input
              key={chars[index].id}
              ref={inputRefs[index]}
              onChange={handleChange(index)}
              className={
                chars[index].element === " " ? "spaceBetween" : "inputEle"
              }
              style={{
                width: chars[index].width + "%",
                float: "left",
                background: style[index] ? "green" : "",
              }}
            />
          ))}
      </span>
    </>
  );
};
export default RenderInputs;
