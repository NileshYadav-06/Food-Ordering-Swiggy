import React from "react";
import { useSelector } from "react-redux";
import "../CSS/itemAdded.css";

const ItemAdded = () => {
  const showAddItems = useSelector((store) => store.cart.addItems);
  return (
    <>
      {showAddItems && (
        <div className="rounded-lg itemAdded fixed right-5 top-[150px] w-[200px] h-11  text-white flex items-center px-3 font-bold text-lg ">
          <p>Item added to Cart...</p>
        </div>
      )}
    </>
  );
};

export default ItemAdded;
