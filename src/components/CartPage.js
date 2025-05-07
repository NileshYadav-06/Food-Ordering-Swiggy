import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AccordianContent from './AccordianContent'
import { clearCart } from '../utils/cartStore'
import { Link } from 'react-router-dom'


const EmptyCart = ()=>{
  return(
    <div className="flex flex-col items-center justify-center h-[80vh] p-4 ">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkvpmBTCbax0HcV53YsHNFMBA9FcbP_AIPg&s" 
        alt="Empty Cart" 
        className="max-w-xs md:max-w-md lg:max-w-lg h-auto mb-6" 
      />
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 text-center">
        Your Cart is Empty
      </h1>
      <p className="text-gray-600 text-center mt-4 mb-8 px-4 md:px-8 lg:px-16">
        It looks like you haven't added any items to your cart yet. Start exploring our delicious menu and add your favorite dishes to your cart.
      </p>
      <Link to={"/"} ><button className="bg-[#FECB0F]  text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
        Explore Menu
      </button></Link>
    </div>
  )
}

const CartPage = () => {

    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()

    const handleCartItem = ()=>{
      dispatch(clearCart());
    }

  return cartItems.length ===0 ? <EmptyCart /> :<>
 
  <button className='bg-[#FECB0F] absolute right-2 font-medium w-12  rounded-lg sm:w-20 h-8 sm:left-10 mt-5 cursor-pointer sm:font-bold' onClick={handleCartItem}>Clear</button>
     <div className='w-[95%] sm:w-8/12 m-auto'>  <AccordianContent data={cartItems}  /></div>
     
  </>
 
}

export default CartPage
