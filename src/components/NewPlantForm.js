import React,{useState} from "react";

function NewPlantForm({handleAddPlant}) {
  const [nombre, setNombre] = useState("");
    const [img, setImg] = useState("");
    const [precio, setPrecio] = useState(0);

    const newPlant = {
      name:nombre,
      image:img,
      price:precio,
      
    };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
          handleAddPlant(newPlant)
          }}
          >
        <input type="text" name="name" value={nombre} placeholder="Plant name" onChange={(e)=>setNombre(e.target.value)}/>
        <input type="text" name="image" value={img} placeholder="Image URL" onChange={(e)=>setImg(e.target.value)}/>
        <input type="number" name="price" step="0.01" value={precio} placeholder="Price" onChange={(e)=>setPrecio(e.target.value)}/>
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
