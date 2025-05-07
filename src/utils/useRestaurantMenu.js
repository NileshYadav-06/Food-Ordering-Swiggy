import { useEffect, useState } from "react";


const useRestaurantMenu = (resId)=>{
   const[resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[ ])

    const fetchData= async ()=>{
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId , {
            headers: {
            'x-cors-api-key': 'temp_30ab0b2006237d8f81f9982b7db77f63'
            }
          });

        const json=await data.json();
        setResInfo(json?.data);
    }

    return resInfo;

}

export default useRestaurantMenu;