import React, { useState, useEffect } from "react";
import "../CSS/categories.css";
// import CategoriesShimmer from "./CategoriesShimmer";
import Shimmer from "./Shimmer";
import CategoriesShimmer from "./CategoriesShimmer";

const Categories = () => {
  const [elements, setElements] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_30ab0b2006237d8f81f9982b7db77f63",
        },
      }
    );
    const json = await data.json();
    const imageGrids =
      json?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
    setElements(imageGrids);
  };

  const next = () => {
    setSlide((prevSlide) =>
      prevSlide < elements.length - 7 ? prevSlide + 1 : 0
    );
  };

  const previous = () => {
    setSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : elements.length - 7
    );
  };

  // Auto-slide useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, [elements]); // Only start when data is loaded

  return elements.length === 0 ? (
    // <CategoriesShimmer />
    <Shimmer />
  ) : (
    <div className="main hidden sm:flex flex-col 2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-[760px] sm:w-[640px] mx-auto">
      <div className="head py-2 sm:py-5 hidden sm:flex items-center justify-between">
        <div className="headCon sm:text-[35px] font-bold">
          What's on your mind?
        </div>
        <div className="flex">
          <div
            className="btn sm:w-[40px] sm:h-[40px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center cursor-pointer"
            onClick={previous}
          >
            ⏮️
          </div>
          <div
            className="btn cursor-pointer sm:w-[40px] sm:h-[40px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center"
            onClick={next}
          >
            ⏭️
          </div>
        </div>
      </div>

      <div className="imgCon flex overflow-hidden">
        {elements.map((elem) => (
          <div
            key={elem.id}
            style={{ transform: `translateX(-${slide * 100}%)` }}
            className="cursor-pointer img 2xl:w-[170px] xl:w-[160px] lg:w-[145px] md:w-[110px] sm:w-[90px] duration-500 flex-grow shrink-0"
          >
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${elem.imageId}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
