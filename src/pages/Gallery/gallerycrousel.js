import React, { useEffect, useRef } from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const Crousel = ({ images, index, isShown }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        isShown;
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });
  // _3lwW_ _1oKnM
  // console.log(disableBtn);
  function CustomMinIcon() {
    return (
      <div
        onClick={isShown}
        style={{
          position: "absolute",
          right: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
          }}
        >
          close
        </h1>{" "}
      </div>
    );
  }
  return (
    <section className="section" aria-labelledby="example2">
      <div className="carousel-container">
        <Carousel
          index={index}
          images={images}
          hasMediaButton={false}
          hasIndexBoard={false}
          isMaximized={true}
          minIcon={<CustomMinIcon />}
        />
      </div>
    </section>
  );
};

export default Crousel;
