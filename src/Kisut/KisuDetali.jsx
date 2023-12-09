import React from "react";
import axios from "axios"
import { useParams } from "react-router-dom"

export default function KisuDetali() {
  const [isBigger, setBigger] = React.useState(false)
  const [data, setData] = React.useState([])
  const kisuNro = useParams()
  
  console.log("Kisu id: ", kisuNro.id)

  React.useEffect(() => {
    axios.get(`http://localhost:8002/kisut/${kisuNro.id}`)
    .then(response => setData(response.data) )
    }
  ,[kisuNro.id])

  console.log(data)


    const toggleSize = (isBigger) => {
      setBigger(!isBigger)
    }

  return (
    <div className="kisu-detail-container">
      <h3 className = "kisu-detail-info">Click image to make it bigger or smaller</h3>
      {data.id > -1 ? (
        <div className={isBigger ? "kisu-detail-bigger" : "kisu-detail-normal"}>
          <img src={data.image} alt={data.name} onClick={() => toggleSize(isBigger)}/>
          <h2>{data.name}</h2>
          <p>{data.nature}</p>
        </div>
      ) : (
        <h2>Issues...</h2>
      )}
    </div>
  );
}
