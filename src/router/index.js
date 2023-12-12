const fs = require("fs");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { columnGroupsStateInitializer } = require("@mui/x-data-grid/internals");

var wholePath = "";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${wholePath}`);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/alive", (req, res) => {
  return res.json({ data: "Elossa ollaan" }).end();
});

router.get("/", (req, res) => {
  res.send("Olet ytimessä").status(200).end();
});

router.post("/api/uploadData", upload.single("image"), async (req, res) => {
  path = req?.body;
  const imgPath = Object.values(path).toString();
  console.log("path: ", imgPath);
  wholePath = `./src/Images/${imgPath}`;
  if (!fs.existsSync(`${wholePath}`)) {
  
  fs.mkdir(wholePath, { recursive: false }, (err) => {
    if (err) {
      console.error('Error creating directory:', err);
    } else {
      console.log('Directory created successfully');
    }
  });
}
    res.json({
      image: `${wholePath}/` + req.file.originalname,
    })
    .end();
});

module.exports = router;
