import React from "react";
import { useDispatch } from "react-redux";
import { addItems, showAddItems } from "../utils/cartStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const AccordianContent = ({ data }) => {
  const dispatch = useDispatch();

  const handleCartItem = (i) => {
    dispatch(addItems(i));
    dispatch(showAddItems());
    setTimeout(() => {
      dispatch(showAddItems());
    }, 1500);
  };

  return (
    <>
      {data.map((i) => (
        <div
          key={i?.card?.info?.id}
          className="bg-slate-200 font-medium rounded-xl flex flex-col sm:flex-row  min-h-44 justify-between px-1 sm:px-5 py-2 border-b border-solid border-black"
        >
          <div className="info w-[100%] sm:w-9/12 px-1 sm:px-5 py-2 gap-1">
            <p className="font-bold text-lg">{i?.card?.info?.name}</p>
            <ul className="list-disc pl-3">
              <li>
                <p>
                  ₹
                  {i?.card?.info?.price / 100 ||
                    i?.card?.info?.defaultPrice / 100}
                </p>
              </li>
              <li className="text-green-900">
                <h4 className=" text-white inline-block w-14 pl-1 py-[2px] rounded-lg   whitespace-nowrap bg-green-700 overflow-hidden text-ellipsis">
                  <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />{" "}
                  {i?.card?.info?.ratings?.aggregatedRating?.rating || "NA"}{" "}
                </h4>
                ({i?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || "N/A"})
              </li>
              <li>
                <p>{i?.card?.info?.description}</p>
              </li>
            </ul>

            {/* <p className='text-green-600 font-medium'>⭐{i?.card?.info?.ratings?.aggregatedRating?.rating}({i?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</p> */}
          </div>
          <div className="img  w-40  sm:h-24 relative   ">
            <img
              className="  object-cover h-36 none  w-40 cursor-pointer rounded-xl  "
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                i?.card?.info?.imageId
              }
              alt=""
            />
            <button
              className="bg-white absolute  top-28 left-11  w-20 border-2 border-solid border-green-500 py-1 font-bold text-green-500 rounded-2xl active:scale-90"
              onClick={() => handleCartItem(i)}
            >
              Add+
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordianContent;
// {/* <li key={i?.card?.info?.id}> {i?.card?.info?.id}-- {i?.card?.info?.name} --  Rs.{i?.card?.info?.price / 100} </li> */ }

// hidden sm:inline-block
