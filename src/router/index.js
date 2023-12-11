const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './src/Images/')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})

const upload = multer({storage:storage})

router.get("/alive", (req, res) => {
  return res.json({ data: "Elossa ollaan" }).end();
});

router.get("/", (req, res) => {
  res.send("Olet ytimessä").status(200).end();
});

router.post("/api/uploadData", upload.single("image"), async (req, res) => {
  res.json({ image: "./src/Images/" + req.file.originalname }).end();
  
});

module.exports = router;
