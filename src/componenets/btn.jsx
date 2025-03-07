import React from "react";

const Btn = ({ text }) => {
  const btnStyle = {
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex"
  };

  return (
    <button style={btnStyle} >
      {text}
    </button>
  );
};

export default Btn;
