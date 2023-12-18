import { Link } from "react-router-dom";
import kisuData from "../aLista.json";

export default function Kisut() {
  const kisulit = kisuData?.map((k) => (
    <div key={k.id} className="kisu-list-tile">
      <Link to={`/kisut/${k.id}`}>
        <img src={k.photo} alt={k.name} />
      </Link>
      <div className="kisu-list-info">
        <h3>Info:</h3>
        <h3>Nimi: {k.name}</h3>
        <h3>Sukupuoli: {k.gender}</h3>
        <h3>Tähdet: {k.stars}</h3>
      </div>
    </div>
  ));

  //

  return (
    <>
      <div className="kisu-list-title">Klikkaa imagea</div>
      <div className="kisu-list-container">{kisulit}</div>
    </>
  );
}
