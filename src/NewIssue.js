import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import "./App.css";

export default function Issue() {
  const [ongelma, setOngelma] = useState(null);
  const [ratkaisu, setRatkaisu] = useState(null);
  const ongelmaRef = useRef();
  const ratkaisuRef = useRef();

  const handleRec = (value) => {
    console.log(value);
    setOngelma(ongelmaRef.current.value);
    setRatkaisu(ratkaisuRef.current.value);
  };

  const item = { ongelma, ratkaisu };

  const submit = async () => {
    console.log("item: ", item);
    const resp = await axios.post("http://localhost:4000/api/postRec", item);
    console.log("Submit resp:", resp);
  };

  return (
    <ul className="newIssue-wrapper">
      <li className="newIssue-form-row">
        <label htmlFor="ongelma">Ongelma</label>
        <input
          ref={ongelmaRef}
          type="text"
          name="ongelma"
          onChange={(event) => handleRec(ongelmaRef.current.name)}
        />
      </li>

      <li className="newIssue-form-row">
        <label htmlFor="ratkaisu">Ratkaisu</label>
        <input
          ref={ratkaisuRef}
          type="text"
          name="ratkaisu"
          onChange={(event) => handleRec(ratkaisuRef.current.value)}
        />
      </li>

      <li className="newIssue-form-row">
        <Button
          variant="contained"
          size="large"
          onClick={submit}
          endIcon=<SendIcon/>
        >
          Lähetä
        </Button>
      </li>
    </ul>
  );
}
