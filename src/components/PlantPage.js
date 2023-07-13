import React,{useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([]);
  const [searchArray, setSearchArray] = useState([]);
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((data) =>{
        setPlantArray(data);
        setSearchArray(data);
      });
  }, []);

  const handleAddPlant = (plant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(plant)
    }
    
  )
  .then((res) => res.json())
    .then((data) => {
      setSearchArray([...searchArray, data]);
      setPlantArray([...plantArray, data])});
  }

  
  const handleSearch = (search) => {
   const newArray = plantArray.filter((plant) =>plant.name.toLowerCase().includes(search));
   console.log(newArray);
   setSearchArray(newArray);
  }

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search handleSearch={handleSearch} />
      <PlantList plantArray={searchArray}/>
    </main>
  );
}

export default PlantPage;
