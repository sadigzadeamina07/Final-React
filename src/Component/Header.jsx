import { Heart, Menu, Search, User } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { PiMagnifyingGlass } from "react-icons/pi";

function Header() {
  const message = [
    "Create an account or log in to unlock 15% off + FREE ground shipping on your first order* with code DARLING15",
    "Unlock A Free Mini Skincare Duo When You Spend $90! T&Cs Apply.",
    'Up to 20% off Magical Savings!'
  ]
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)
  console.log(fade);

  useEffect(() => {

    const NextMessage = () => {
      setFade(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % message.length)
        setFade(true)
      }, 400)

    }
    const timer = setInterval(NextMessage, 4000)

    return () => clearInterval(timer)
  }, [message.length])

  console.log(index);
  console.log(fade);

  return (
    <div >
      <div className="bg-[#fde8e0] p-2">
        <div className="container max-w-[1470px] mx-auto">
          <div className="text-center text-[#340c0c] text-sm ">
            <a href="" className={`transition-opacity duration-400 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'} `}>{message[index]} </a>
          </div>
        </div>


      </div>
      <div className="bg-white p-[1rem] ">
        <div className="container max-w-[1470px] mx-auto">
          <div className="hidden md:flex h-[10vh]  justify-between items-center ">
            <div className="text-[12px]  gap-4">
              <p>United States| EN | USD $</p>

            </div>
            <img src="/assets/img/logo.svg" className='w-[230px] m-auto' alt="" />
            <div className="flex gap-4 items-center text-[#340c0c] ">
              <User size={25} strokeWidth={1} color='#340c0c' />
              <Heart size={25} strokeWidth={1} color='#340c0c' />
              <PiMagnifyingGlass size={25} />
                    <img src="/assets/img/BasketIcon.svg" className='w-[35px]' alt="" />
            </div>
      
          </div>
          <div className="flex  md:hidden   h-[10vh] justify-between items-center ">
            <div className="flex gap-4">
              <Menu size={25} strokeWidth={1} color='#340c0c' />
              <Heart size={25} strokeWidth={1} color='#340c0c' />
            </div>

            <img src="/assets/img/logo.svg" className='w-[170px] m-auto' alt="" />
            <div className="flex items-center gap-4">
              <User size={25} strokeWidth={1} color='#340c0c' />
              <img src="/assets/img/BasketIcon.svg" className='w-[35px]' alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header