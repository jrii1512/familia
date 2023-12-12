import React from "react";
import "../index.css";

export default function Upload() {
  const [file, setFile] = React.useState(null);

  const folderRef = React.useRef();

  const handleImage = (e) => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  };

  const uploadNow = () => {
    const fd = new FormData();
    console.log("file: ", file);
    fd.append("image", file, file.name);
    fd.append("path", folderRef.current.value)
    fetch(
      "http://localhost:4000/api/uploadData",
      { method: 'POST', body: fd}
    )
      .then((response) => console.log(response))
      .catch((err) =>
        console.error(
          "Fileen lähetys serverile meni aivan vituiksi, error:",
          err
        )
      );
  };

  //<img src={URL.createObjectURL(file)} />
  return (
    <div className="uploader">
      <h3>Lataa kuva</h3>
      <input type="file" onChange={handleImage} />
      <input type = "text" ref = {folderRef} placeholder="Sub directory"/>
      <button onClick={uploadNow}>Save</button>
    </div>
  );
}

