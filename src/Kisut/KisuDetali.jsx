import React from "react";
import { useParams } from "react-router-dom";
import Photos from "../aLista.json";

export default function KisuDetali() {
  const [isBigger, setBigger] = React.useState(false);
  const [filteredArray, setFilteredArray] = React.useState([]);
  const kisuNro = useParams();
  console.log("Kisu id: ", kisuNro.id);
  console.log("Photos: ", Photos);

  React.useEffect(() => {
    const filteredObj = Photos.filter(
      (e) => parseInt(e.id) === parseInt(kisuNro.id)
    );
    console.log("filteredObj: ", filteredObj);
    setFilteredArray(filteredObj);
  }, [kisuNro.id]);

  console.log("Photos:", Photos);
  if (filteredArray.length === 1) {
    filteredArray.map((f) => console.log("f:", f));
  }

  const toggleSize = (isBigger) => {
    setBigger(!isBigger);
  };

  return (
    <div className="kisu-detail-container">
      <h3 className="kisu-detail-info">
        Click image to make it bigger or smaller
      </h3>
      {filteredArray.map((data) =>
        data.id > -1 ? (
          <div
            key={data.id}
            className={isBigger ? "kisu-detail-bigger" : "kisu-detail-normal"}
          >
            <img
              src={data.photo}
              alt={data.name}
              onClick={() => toggleSize(isBigger)}
            />
            <h2>{data.name}</h2>
            <p>{data.gender}</p>
            <p>{data.nature}</p>
          </div>
        ) : (
          <h2 key={data.id + 10}>Issues ...</h2>
        )
      )}
    </div>
  );
}
