const express = require("express");
const router = express.Router();
const {
  getData,
  getSaldo,
  addNew,
  addData,
  deleteRecord,
  getSearchData,
} = require("../controllers/controller");

router.get("/alive", (req, res) => {
  return res.json({data: "Elossa ollaan"}).end();
});

router.get("/", (req, res) => {
  res.send("Olet ytimessä").status(200).end();
});

router.get("/api/getSaldo", async (req, res) => {
  getSaldo((error, data) => {
    console.log("data: ", data)
    if (error) {
      console.log("Error: ");
    }
    console.log("data in router/index: ", data);
    return res.json(data).end();
  });
});

router.get("/api/getData", async (req, res) => {
  getData((error, data) => {
    if (error) {
      return res.send(error);
    }
    console.log("data in router/index: ", data);
    return res.json(data);
  });
});

router.get("/api/searchData/:search", async (req, res) => {
  const { search } = req?.params;
  getSearchData(search, (error, data) => {
    if (error) {
      return res.send(error);
    }
    return res.json(data);
  });

  /*
  const { data } = req.body;
  const searchResults = getSearchData(data);
  return searchResults
  */
});

router.put("/api/uploadData", async (req, res) => {
  const resp = req.body.map((rec) => addData(rec[0], rec[2], rec[3], rec[4])
  );
  console.log("Upload resp: ", resp)
  resp === 201 ? res.sendStatus(201): res.sendStatus(500)
});

router.post("/api/postRec", async (req, res) => {
  const { ongelma, ratkaisu } = req.body;
  const postData = addNew(ongelma, ratkaisu);
});

router.delete("/api/remove/:id", async (req, res) => {
  console.log("router.index -- delete");
  const { id } = await req?.params;
  const delId = id.substring(1);
  const delResponse = deleteRecord(parseInt(delId));
  res.sendStatus(delResponse);
});

router.post("/api/postFamiliy", async (req, res) => {
  const { ongelma, ratkaisu } = req.body;
  const postData = addNew(ongelma, ratkaisu);
});


module.exports = router;
