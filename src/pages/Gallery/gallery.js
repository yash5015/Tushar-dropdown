import Image from "next/image";
import React, { useEffect, useState } from "react";
import Crousel from "./gallerycrousel";
const Gallery = () => {
  const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`,
  }));
  const [index, setIndex] = useState(0);
  const [Show, setShow] = useState(false);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShow(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  const handleCrousel = (id) => {
    setIndex(id);
    setShow(true);
    console.log(id);
  };
  const hanldeVisibility = () => {
    setShow(false);
    console.log("false");
  };
  return (
    <>
      <div className="gallery">
        <div className="imgRow">
          {images.map((item, id) => (
            <img
              src={item.src}
              key={id}
              onClick={() => handleCrousel(id)}
              className="image"
            />
          ))}
        </div>
      </div>
      {Show ? (
        <div className="crousel">
          <Crousel images={images} index={index} isShown={hanldeVisibility} />
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
