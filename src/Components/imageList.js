import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    //We use the .map() method to iterate each element within the array.
    return <img src={image.urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
