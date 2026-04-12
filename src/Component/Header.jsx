import React, { useState } from 'react'

function Header() {
  const message=[
    "Create an account or log in to unlock 15% off + FREE ground shipping on your first order* with code DARLING15",
    "Unlock A Free Mini Skincare Duo When You Spend $90! T&Cs Apply."
  ]
  const [index,setIndex]=useState(0)
const [fade,setFade]=useState(false)
  return (
    <div>
        <div className="bg-[#fde8e0] py-2">
             <div className="text-center text-[#340c0c] text-sm ">
<a href="" className='fade ? opacity-0 : opacity-1'>{message[index]} </a>
    </div>
        </div>
    </div>
  )
}

export default Header