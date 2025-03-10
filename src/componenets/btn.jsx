import React from "react";

const Btn = ({ text , func }) => {
  const btnStyle = {
    margin: '10px',
    textAlign: "center",
    backgroundColor: "#e74c3c",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "bold",
  };

  return (
    <button onClick={func} style={btnStyle} >
      {text}
    </button>
  );
};

export default Btn;
