import React from 'react'
import CategoriesShimmer from './CategoriesShimmer'
// import '../CSS/shimmer.css'

const Shimmer = () => {
  return <>
  <div className="body w-[100%]">
    <CategoriesShimmer />
   
  <div className="main bg-[#cccccccb]    2xl:w-[1200px] xl:w-[1100px] lg:w-[1000px] md:w-[760px] sm:w-[640px]    mx-auto "></div>
   <h1 className=" bg-[#cccccccb] ml-3 sm:ml-[180px]   sm:text-[35px] ">
       
      </h1>
  <div className="filter  gap-5 flex justify-evenly ">
    <div className="search rounded-xl bg-[#cccccccb] h-10 "></div>
    <div className="filterBtn ml-6 rounded-xl bg-[#cccccccb] h-10 w-[170px] "></div>
  </div>
  <div className="resContainer   flex flex-wrap items-center justify-center ">
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
    <div className="shimmerCard m-2 w-[270px] h-[350px] bg-[#cccccccb] rounded-xl  "></div>
  </div>
  </div>
  

  </>
}

export default Shimmer
