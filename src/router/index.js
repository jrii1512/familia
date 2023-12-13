const multer = require("multer");
const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const { columnGroupsStateInitializer } = require("@mui/x-data-grid/internals");

router.get("/alive", (req, res) => {
  return res.json({ data: "Elossa ollaan" }).end();
});

const isFolderPresent = (folder) => {
  let wholePath = `./src/Images/${folder}`;
  if (!fs.existsSync(`${wholePath}`)) {
    fs.mkdir(wholePath, { recursive: false }, (err) => {
      if (err) {
        console.error("Error creating directory:", err);
        return false;
      } else {
        console.log("Directory created successfully");
        return true;
      }
    });
  }
  return wholePath;
};
router.post("/newdir", (req, res) => {
  const { folder } = req.body;
  const resp = isFolderPresent(folder);
  resp === true ? res.sendStatus(201) : res.sendStatus(404);
});

router.get("/", (req, res) => {
  res.send("Olet ytimessä").status(200).end();
});

// Create a function to dynamically set the destination

//const dynamicFolder = (req, file, cb) => {
// Determine the destination based on your conditions or parameters
/*let destinationPath = req.file.path;
  console.log("destinationPath: ", destinationPath);
*/
// You can modify the destination path based on your logic
// For example, use the user ID or some other dynamic information
// destinationPath += req.user.id + '/';

// Call the callback function with the final destination path
//cb(null, path.join(__dirname, destinationPath));
//};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../Images/temp"));
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
    path.join(__dirname, "../Images/temp/" + filename),
    path.join(__dirname, `../Images/${data}/${filename}`),
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
