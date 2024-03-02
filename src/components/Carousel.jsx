import React, { useState } from "react";
import "./Carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
  console.log(data);

  return (
    <div className="carousel">
      <FaArrowLeft className="arrow arrow-left"/>
        {
            data.map((item,idx) => {
                return <img 
                            className={slide === idx ? "slide" : "slide slide-hidden"}
                            src={item.src}
                            alt={item.alt}
                            key={idx}
                        />
            })
        }
      <FaArrowRight className="arrow arrow-right"/>
    </div>
  );
};
