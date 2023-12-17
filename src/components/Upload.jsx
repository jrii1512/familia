import React from "react";
import "../index.css";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = React.useState(null);
  const folderRef = React.useRef();

  const handleImage = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const ensureStructure = (folder) => {
    axios
      .post("http://localhost:4000/newdir", { folder })
      .then((response) => console.log("ensureStructure: ", response));
    return true;
    };

  const uploadNow = () => {
    const fd = new FormData();
    const folderExist = ensureStructure(folderRef.current.value);

    if (folderExist) {
      const folderLocation = `${folderRef.current.value}`;
      fd.append("image", file);
      fd.append("data", folderLocation)

      
      axios
        .post("http://localhost:4000/api/uploadData", fd)
        .then((response) => console.log(response))
        .catch((err) =>
          console.error(
            "Fileen lähetys serverile meni aivan vituiksi, error:",
            err
          )
        );
    }
  };


  //<img src={URL.createObjectURL(file)} />
  return (
    <div className="uploader">
      <h3>Lataa kuva</h3>
      <input id = "chooser" type="file" onChange={handleImage} />
      <input
        type="text"
        ref={folderRef}
        placeholder="Imagen alihakemisto"
      />
      <button onClick={uploadNow}>Talleta</button>
    </div>
  );
}
