import React from "react";
import Btn from "./btn";

const Card = ({ image, title, price, location, date}) => {
  const styles = {
    cardContainer: {
      display: "flex",
      flexWrap: "nowrap",
      gap: "10px",
      justifyContent: "center",
      overflowX: "auto",
      padding: "10px",
    },
    card: {
      width: "250px",
      background: "white",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
      transition: "0.3s",
      padding: "10px",
      margin: "10px",
    },
    cardImage: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
    },
    cardTitle: {
      fontSize: "18px",
      margin: "5px 0",
      color:"#002f34"
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
    cardDescription: {
      fontSize: "14px",
      color: "#444",
      marginTop: "5px",
    }
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.cardImage} />
        <div>
          <h3 style={styles.cardTitle}>{title}</h3>
          <p style={styles.cardPrice}>Rs {price}</p>
          <p style={styles.cardLocation}>{location}</p>
          <p style={styles.cardDate}>{date}</p>
          <Btn text="Purchase" />
        </div>
      </div>
    </div>
  );
};

export default Card;
