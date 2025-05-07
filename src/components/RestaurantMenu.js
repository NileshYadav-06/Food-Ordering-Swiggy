// import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Accordian from "./Accordian";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import ResMenuShimmer from "./ResMenuShimmer";
import ItemAdded from "./ItemAdded";

const RestaurantMenu = () => {
  // const[showItems,setShowItems]= useState(false)
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
    // console.log(resId)
  const Info = useRestaurantMenu(resId);

  if (Info === null) {
    return <ResMenuShimmer />;
  }

  const resInfo = Info?.cards.filter((e) => e?.card?.card?.info)[0];

  const {
    name,
    feeDetails,
    city,
    cuisines,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
    locality,
    sla,
  } = resInfo?.card?.card?.info;
  // console.log(ratingCount);

  // const category = Info?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
  //     return e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  // });
  const category = Info?.cards
    .filter((e) => e?.groupedCard?.cardGroupMap?.REGULAR?.cards)[0]
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
      return (
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  // console.log(category);
  // .filter((r)=> r?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <>
    <ItemAdded />
      <div className="resAllInfo px-4  py-3 xl:px-[280px] lg:px-[170px] w-[100%] md:px-[100px] sm:  border-2 border-solid border-black ">
        <div className="resInfo flex flex-col items-center sm:flex-row justify-between  p-5 gap-2 border-2 border-solid border-black rounded-xl">
          <div className="resDetailes font-medium">
            <h1 className="font-bold text-3xl sm:text-4xl  ">{name} </h1>

            <ul className="list-disc">
              <li>
                <h4 className="mt-3 text-white inline-block w-14 pl-1 py-[2px] rounded-lg   whitespace-nowrap bg-green-700 overflow-hidden text-ellipsis">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />{" "}
                  {avgRating}{" "}
                </h4>
                ({totalRatingsString} )
              </li>
              <li>{cuisines.join(", ")}</li>
              <li>
                {city},{locality}
              </li>
              <li>{costForTwoMessage}</li>
              <li>
                {sla.deliveryTime} min | ₹{feeDetails?.totalFee / 100} Delivery
                fee will apply{" "}
              </li>
            </ul>
            {/* <h3 ></h3>
                <h3 ></h3>
                <h3></h3>
                <h3></h3> */}
          </div>

          <div className="resImg">
            <img
              className="w-[200px] h-[130px] sm:w-[300px] sm:h-[200px]  rounded-2xl object-cover "
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                cloudinaryImageId
              }
              alt="img"
            />
          </div>
        </div>
        <div className="accordians ">
          {category.map((c, index) => (
            <Accordian
              data={c?.card?.card}
              key={c?.card?.card?.title}
              showItems={index === showIndex ? true : false}
              setind={() =>
                showIndex === index ? setShowIndex(null) : setShowIndex(index)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

// const {menuItems}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

// const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card  ;
// console.log(recommended);
