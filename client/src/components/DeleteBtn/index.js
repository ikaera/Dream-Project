import React from "react";

function DeleteBtn(props) {
  // Render a span element that acts as a delete button
  return (
    <span {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default DeleteBtn;
