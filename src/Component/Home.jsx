import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
            <div className='max-w-[1300px] mx-auto'>
        <div className=" text-center text-[#3a080a]">
                    <h3 className='text-[28px] p-[24px] '>Shop By Category</h3>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
<div className="    hover:underline  flex flex-col items-center ">
   <Link to='/'>
   <img src="/assets/img/ShopByCategory/MakeUp.png" className='h-[42vh]  w-fit object-cover' alt="" />
   </Link> 
    <Link  to='/' className='   p-[1rem]'>Makeup</Link>
</div>
<div className="    hover:underline flex flex-col items-center ">
    <img src="/assets/img/ShopByCategory/Skincare.png" className='h-[42vh]  w-fit object-cover' alt="" />
        <Link   to='/' className='    p-[1rem]'>Skincare</Link>
</div>
<div className="   hover:underline  flex flex-col items-center ">
    <img src="/assets/img/ShopByCategory/Foundation.webp" className='h-[42vh]  w-fit object-cover' alt="" />
    <Link  to='/' className='    p-[1rem]'>Foundation</Link>
</div>
<div className="  hover:underline flex flex-col items-center ">
    <img src="/assets/img/ShopByCategory/Newin.webp" className='h-[42vh]  w-fit object-cover' alt="" />
    <Link to='/' className='   p-[1rem]'>New In </Link>
</div>
    </div>
        </div>

    
    </div>
    <div className="bg-[#f5f3f3] ">
 <div className='max-w-[1300px] mx-auto'>
        <div className="text-center text-[#3a080a]">
                    <h3 className='text-[28px] p-[24px] '>Charlotte Tilbury Exclusives</h3>
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
<div className="      hover:underline flex flex-col items-center ">
    <img src="/assets/img/Exclusives/FreeMiniSkincareDuo.webp" className='h-[42vh]  w-fit object-cover' alt="" />
    <Link  to='/' className='   p-[1rem]'>Free Mini Skincare Duo!</Link>
</div>
<div className="      hover:underline   flex flex-col items-center ">
    <img src="/assets/img/Exclusives/ExclusiveLoyaltyGift.png" className='h-[42vh]  w-fit object-cover' alt="" />
        <Link   to='/' className='   p-[1rem]'>Unlock An Exclusive Loyalty Gift!</Link>
</div>
<div className="     hover:underline  flex flex-col items-center ">
    <img src="/assets/img/Exclusives/ExclusiveBridalBeautyKit.png" className='h-[42vh]  w-fit object-cover' alt="" />
    <Link  to='/' className='    p-[1rem]'>NEW! App-Exclusive Bridal Beauty Kit!</Link>
</div>
<div className="    hover:underline   flex flex-col items-center ">
    <img src="/assets/img/Exclusives/SkincareKits.webp" className='h-[42vh]  w-fit object-cover' alt="" />
    <Link to='/' className='   p-[1rem]'>Up To 15% Off Skincare Kits!</Link>
</div>
    </div>
        </div>
        
    </div>
    </div>
    </div>
  )
}

export default Home