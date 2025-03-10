import React from "react";
import Btn from "./btn";

const Card = ({ image, title, price, location, date }) => {
  const cardStyle = {
    card: {
      width: "250px",
      height:"400px",
      background: "white",
      borderRadius: "8px",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      transition: "0.3s",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
    },
    cardImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    cardTitle: {
      fontSize: "18px",
      margin: "5px 0",
      color: "#002f34",
    },
    cardPrice: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#002f34",
    },
    cardLocation: {
      fontSize: "14px",
      color: "#666",
    },
    cardDate: {
      fontSize: "12px",
      color: "#999",
      marginTop: "5px",
    },
  };

  return (
    <div style={cardStyle.wrapper}>
      <div style={cardStyle.card}>
        <img src={image} alt={title} style={cardStyle.cardImage} />
        <h3 style={cardStyle.cardTitle}>{title}</h3>
        <p style={cardStyle.cardPrice}>Rs {price}</p>
        <p style={cardStyle.cardLocation}>{location}</p>
        <p style={cardStyle.cardDate}>{date}</p>
        <Btn text="Purchase" />
      </div>
    </div>
  );
};

export default Card;
