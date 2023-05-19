import React from "react";

function Jumbotron({ children }) {
  // Render a Jumbotron component with the following styles
  return (
    <div
      style={{
        height: 560,
        clear: "both",
        paddingTop: 120,
        textAlign: "center"
      }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
