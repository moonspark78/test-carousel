import React, { useState } from "react";
import "./Carousel.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
  console.log(data);

  const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide -1)
  };


  const nextSlide = () => {
        setSlide(slide  === data.length - 1 ? 0 : slide + 1)
  };

  return (
    <div className="carousel">
      <FaArrowLeft className="arrow arrow-left" onClick={prevSlide}/>
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
      <FaArrowRight className="arrow arrow-right" onClick={nextSlide}/>
      <span className="indicators">
            {
                data.map((_,idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
            })
            }
      </span>
    </div>
  );
};
