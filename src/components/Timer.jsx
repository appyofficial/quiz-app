import React, { useState, useEffect } from "react";

export default function Timer({ currIndex }) {
  const [timer, setTimer] = useState(15);

  const resetTimer = () => {
    clearTimeout(runTimer);
    setTimer(15);
  };

  useEffect(() => {
    resetTimer();
  }, [currIndex]);

  const runTimer = () => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        setTimer(15);
      }
    }, 1000);
  };

  runTimer();

  return <div>TimeLeft : {timer}</div>;
}
