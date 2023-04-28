import React, { useState } from "react";

function App() {
  const [headingText, setHeadingtext] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  function handleClick() {
    console.log("Clicked");
    setHeadingtext("Submitted");
  }
  function mouseHover() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={mouseHover}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
