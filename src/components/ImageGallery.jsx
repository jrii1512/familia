import classNames from "classnames";
import React from "react";

const ImageGallery = () => {
  // Use require.context to dynamically import all images from a folder

  const [isBigger, setBigger] = React.useState(false);
  const importAll = (context) => context.keys().map(context);
  const images = importAll(
    // eslint-disable-next-line no-undef
    require.context("../Images", true, /\.(png|jp?g|svg)$/)
  );

  console.log("Image Gallery: ", images);

  const toggleSize = () => {
    setBigger(!isBigger);
  };

  console.log("isBigger:", isBigger);

  const imgSize = isBigger ? "bigger" : "normal";
  console.log("imgSize: ", imgSize)

  const classes = classNames(`${ imgSize } `);
  console.log("classes: ", classes)
  return (
    <div>
      {images.map((kuva, index) => (
        <img
          key={index}
          src={kuva}
          alt={kuva.name}
          className={classes}
          onClick={() => toggleSize()}
          title={kuva.name}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
