const multer = require("multer");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/alive", (req, res) => {
  return res.json({ data: "Elossa ollaan" }).end();
});

const isFolderPresent = (folder) => {
  let folderExist = false;
  let wholePath = `public/Images/${folder}`;
  let tempPath = "public/Images";

  fs.readdir(tempPath, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    console.log("Files in the directory:", files);
  });

  if (!fs.existsSync(wholePath)) {
    fs.mkdir(wholePath, { recursive: false }, (err) => {
      if (err) {
        console.error("Error creating directory:", err);
      } else {
        console.log("Directory created successfully");
        folderExist = true;
      }
    });
  }
  return folderExist;
};
router.post("/newdir", (req, res) => {
  const { folder } = req.body;
  const resp = isFolderPresent(folder);
  resp === true ? res.sendStatus(201) : res.sendStatus(404);
});

router.get("/", (req, res) => {
  res.send("Olet ytimessä").status(200).end();
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/Images/temp"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/api/uploadData", upload.single("image"), async (req, res) => {
  const filename = req.file.originalname;
  const { data } = req.body;

  fs.rename(
    path.join(__dirname, "../../public/Images/temp/" + filename),
    path.join(__dirname, `../../public/Images/${data}/${filename}`),
    function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("File moved successfully!");
      }
    }
  );

  res.json({});
});

module.exports = router;
