import React from 'react'
import '../CSS/about.css'
import photo from "../assets/Chef PNG - Free Download-Photoroom.png";
import item1 from '../assets/Chinese Chow Mein Noodles Plate With Vegetables HD PNG - Image ID 489178 _ TopPNG-Photoroom.png'
import item2 from '../assets/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.avif'
import item3 from '../assets/download.jpeg'
import { Link } from 'react-router-dom';


const About = () => {
  return <>
    <div className="mainContainer w-[100vw] flex   flex-wrap  ">
      
      <div className="aboutInfo     font-bold   ">
       
       "It's not just <span className=' text-white rounded-3xl bg-[#FECB0F]'>Food</span>, <br />
        It's an <span className='  text-white rounded-3xl bg-[#FECB0F]'>Experience</span>"

        <Link to={"/"}> <button>View Menu</button> </Link>
        <Link to={"/contact"}  > <button className='table'>Book a Table</button> </Link>

      </div>
      <div className="aboutImg    flex  ">
        <div className="shefimg mt-10   "><img src={photo} alt="img" className='   ' /></div>

        <div className="itemlist pt-5 pl-5 ">
          <img src={item1} alt="img"  />
          <img src={item2} alt="img"  />
          <img src={item3} alt="img"  />

        </div>


      </div>
    </div>
  </>
}

export default About


// border-2  border-solid border-violet-500