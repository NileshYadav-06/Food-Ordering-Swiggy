import React from 'react'
import AccordianContent from './AccordianContent'

const Accordian = ({ data , showItems ,setind}) => {
  
    
    // console.log(data);

    return <>
        <div className="accordian bg-slate-200 border rounded-2xl my-2">
            <div className="accHeader  shadow-lg  cursor-pointer flex justify-between font-semibold text-lg px-2 py-3  sm:text-2xl sm:px-10 sm:py-5  " onClick={()=> setind()} >
                <p>{data.title} ({data.itemCards.length})</p>
                <p  >{showItems ? "⬆️" : "⬇️"} </p>
            </div>
            <div className="accContent">
            {showItems && <AccordianContent data={data?.itemCards} /> }
            </div>

        </div>
    </>
}

export default Accordian
