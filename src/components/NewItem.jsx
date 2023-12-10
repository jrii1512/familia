import React, { useRef } from "react";
import "../index.css";
export default function NewItem() {
  /*
      "id": 1,
      "name": "Miisu",
      "gender": "naaras",
      "nature": "Vahva soturiprincessa kissa",
      "image": "../Images/Miisu/Miisu.jpg",
      "stars": "*****"
    */

  const nameRef = useRef();
  const genderRef = useRef();
  const natureRef = useRef();
  const folderRef = useRef();
  const starsRef = useRef();

  const [data, setData] = React.useState(null);
  
  const handleChange = () => {
    setData({
      name: nameRef.current.value,
      gender: genderRef.current.value,
      nature: natureRef.current.value,
      stars: starsRef.current.value,
      image: `../Images/${folderRef.current.value}/${nameRef.current.value}.jpg`,
    });
    pushToJsonFile()
  };

  const pushToJsonFile = () => {
    fetch(`http://localhost:8002/${folderRef.current.value}`,{ 
      method: 'POST', 
        headers: {'Content-Type' : 'application/json'}
  , body: JSON.stringify(data) })

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("Vituiksi meni json fileeseen dumppaus, error: ", err))
  }

  console.log(data);
  return (
    <div className="newContainer">
      <label>Fill new item</label>
      <input type="text" name="name" placeholder="Name" ref={nameRef}/>
      <input type="text" name="gender" placeholder="Gender" ref={genderRef} />
      <input type="text" name="nature" placeholder="Nature" ref={natureRef} />
      <input type="text" name="stars" placeholder="Stars" ref={starsRef} />
      
      <input
        type="text"
        name="pathFolder"
        placeholder="Image path folder"
        ref={folderRef}
      />
      <button onClick={handleChange}>Commit</button>
    </div>
  );
}
