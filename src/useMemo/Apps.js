import React, { useMemo, useState } from "react";

const Apps = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  //   const doubleNumber = slowFunction(number);
  // old putting delay on changing theme color
  // applying ung use memo sa baba makita mo na parang use effect lang ndi mag compile ung
  //state as long ndi mag updata ung dependecy\
  //but wag mong abusihin ung paggamit dahil mag couse ng memory chu chu...
  //useMemo ginagmit para sa function !
  //https://www.youtube.com/watch?v=THL1OPn72vo

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}> Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num) => {
  console.log("calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default Apps;
