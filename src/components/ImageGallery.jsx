import classNames from "classnames";
import React from "react";
import axios from "axios";

const ImageGallery = () => {
  // Use require.context to dynamically import all images from a folder

  const [isBigger, setBigger] = React.useState(false);
  const importAll = (context) => context.keys().map(context);
  const images = importAll(
    // eslint-disable-next-line no-undef
    require.context("../../public/Images", true, /\.(png|PNG|jp?g|svg)$/)
  );

  const toggleSize = () => {
    setBigger(!isBigger);
  };

  const removeImage = (index) => {
    console.log(
      "Removing index ... as it's local then using fs should be ok",
      index
    );
    axios
      .delete("http://localhost:4000/api/removeFile", index)
      .then((response) => console.log("response: ", response))
      .catch((err) => {
        console.log("Fileen poistaminenhan meni aivan vituiksi, error:", err);
      });
  };

  console.log("isBigger:", isBigger);

  const imgSize = isBigger ? "bigger" : "normal";
  console.log("imgSize: ", imgSize);

  const classes = classNames(`${imgSize} `);
  console.log("classes: ", classes);

  console.log("kuvia:", images);
  return (
    <div>
      {images.map((kuva, index) => (
        <img
          key={index}
          src={kuva}
          alt="photo"
          className={classes}
          onClick={() => toggleSize()}
          onDoubleClick={() => removeImage(index)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
