// eslint-disable-next-line no-undef
const { writeFile } = require("fs");

// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
exports.saveFile = (fd) => {
  // Write the content to the file
  writeFile("./Images", fd, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

// eslint-disable-next-line no-undef
exports.saveFile = this.SaveFile;
