import React from "react";
import { useParams } from "react-router-dom";
import Photos from "../aLista.json";
import "../kisulit.css"

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
            <table className="kisu-detail-taulu">
              <div className="row">
                <div className="cell">Nimi: {data.name}</div>
                <div className="cell">Sukupuoli: {data.gender}</div>
                <div className="cell">Erityispiirteet: {data.nature}</div>
              </div>
            </table>
          </div>
        ) : (
          <h2 key={data.id + 10}>Kuvan id:eetä ei löydy...</h2>
        )
      )}
    </div>
  );
}
