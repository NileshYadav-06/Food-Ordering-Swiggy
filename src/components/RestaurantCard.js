import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
// import '../CSS/restaurantCard.css'


const RestaurantCard = (props) => {

    const { resData } = props;
    // console.log(resData);
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla,
        costForTwo,
        areaName
    } = resData?.info;




    return <div className="resCard  border-2 border-solid border-[#ccccccee] cursor-pointer rounded-xl p-1 transition-all transition- m-2 w-[270px] h-[350px] bg-[#ccccccee] hover:border-black hover:scale-95 ">
        <img className="w-full h-[50%] rounded-2xl object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
        <h2 className="my-1 font-semibold py-1 text-2xl whitespace-nowrap overflow-hidden text-ellipsis" >{name} </h2>
        <h4 className="my-1 whitespace-nowrap  overflow-hidden text-ellipsis">{cuisines.join(", ")} </h4>

        <ul className="font-medium list-disc flex  gap-6">
            <h4 className="my-1 text-white w-14 pl-1 py-[2px] rounded-lg   whitespace-nowrap bg-green-700 overflow-hidden text-ellipsis"><FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", }} /> {avgRating} </h4>
            <li><h4 className="my-1 whitespace-nowrap overflow-hidden text-ellipsis">{sla.deliveryTime}  min</h4></li>
            <li><h4 className="my-1 whitespace-wrap overflow-hidden text-ellipsis">{costForTwo} </h4></li>
        </ul>

        <ul className="font-medium list-disc flex pl-6 whitespace-wrap overflow-hidden text-ellipsis">     
            <li><h4 className="my-1 ">{areaName}</h4></li>
        </ul>

    </div>
}

export default RestaurantCard;