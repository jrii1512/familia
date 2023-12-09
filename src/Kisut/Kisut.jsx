import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Kisut() {
  const [kisu, setKisu] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8002/kisut", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log("response: ", response);
      setKisu(response.data);
    } catch (err) {
      console.log("vituiksi meni jsonin haku", err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const kisulit = kisu?.map((k) => (
    <div key={k.id} className="kisu-tile">
      <Link to={`/kisut/${k.id}`}>
        <img src={k.image} alt={k.name} />
      </Link>
      <div className="kisu-info">
        <h3>Info:</h3>
        <h3>Nimi: {k.name}</h3>
        <h3>Sukupuoli: {k.gender}</h3>
        <h3>Tähdet: {k.stars}</h3>
      </div>
    </div>
  ));

  //

  return <div className="kisu-list">{kisulit}</div>;
}
