import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {
  const arrayCards = plantArray.map((plant) => <PlantCard key={plant.id} {...plant} />)

  return (
    <ul className="cards">{arrayCards}</ul>
  );
}

export default PlantList;
