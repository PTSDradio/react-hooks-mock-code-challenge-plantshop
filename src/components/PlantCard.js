import React,{useState} from "react";

function PlantCard({name, image, price, id}) {
  const [soldOut, setSoldOut] = React.useState(true);
  const handleStock = () => {
    setSoldOut(!soldOut);
  };
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!soldOut ? (
        <button className="primary"onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
