import React from 'react'
import { Link } from 'react-router'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
function Home() {
    const data = [
        {
            "id": "ct-magic-duo-001",
            "name": "Magic Cream & Setting Spray Duo",
            "category": "Skincare Kits",
            "price": 85.00,
            "currency": "USD",
            "main_image": "B13_-_MAGIC_CREAM_SETTING_SPRAY_DUO.png",
            "hover_image": "MC-50ml.png",
            "tag": "Limited Edition",
            "rating": 4.9
        },
        {
            "id": "ct-hff-002",
            "name": "Hollywood Flawless Filter",
            "category": "Face Primer",
            "price": 49.00,
            "currency": "USD",
            "main_image": "HFFMINI-3-BESTSELLER-PDP.png",
            "hover_image": "HFF-PACKSHOT-OPEN-4.png",
            "tag": "Best Seller",
            "rating": 4.8
        },
        {
            "id": "ct-lip-cheat-003",
            "name": "Lip Cheat - Pillow Talk",
            "category": "Lip Liner",
            "price": 25.00,
            "currency": "USD",
            "main_image": "LIPCHEAT-PT-LEGENDARY-PDP.png",
            "hover_image": "LIPCHEAT-PT-LEGENDARY-PDP.png",
            "tag": "Iconic",
            "rating": 4.9
        },
        {
            "id": "ct-magic-cream-004",
            "name": "Charlotte's Magic Cream",
            "category": "Moisturizer",
            "price": 100.00,
            "currency": "USD",
            "main_image": "MC-50ml.png",
            "hover_image": "B13_-_MAGIC_CREAM_SETTING_SPRAY_DUO.png",
            "tag": "Award Winner",
            "rating": 4.7
        },
        {
            "id": "ct-setting-spray-005",
            "name": "Airbrush Flawless Setting Spray",
            "category": "Setting Spray",
            "price": 38.00,
            "currency": "USD",
            "main_image": "B13_-_MAGIC_CREAM_SETTING_SPRAY_DUO.png",
            "hover_image": "HFF-PACKSHOT-OPEN-4.png",
            "tag": "New",
            "rating": 4.8
        }
    ]
    return (
        <div className='text-[#3a080a] '>
            <Link to='/'>
                <img src="/assets/img/Hero.png" className='hidden md:block w-full' alt="" />
                <img src="/assets/img/HeroMobile.gif" className='md:hidden w-full  block' alt="" />
            </Link>

            <div className='max-w-[1300px] mx-auto'>
                <div className=" text-center px-3">
                    <h3 className='font-optima text-[28px] p-[24px] '>Shop By Category</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
                        <div className="    hover:underline  flex flex-col items-center ">
                            <Link to='/'>
                                <img src="/assets/img/ShopByCategory/MakeUp.png" className='h-[42vh]  xl:h-[]   w-fit object-cover' alt="" />
                            </Link>
                            <Link to='/' className='   p-[1rem]'>Makeup</Link>
                        </div>
                        <div className="    hover:underline flex flex-col items-center ">
                            <img src="/assets/img/ShopByCategory/Skincare.png" className=' h-[42vh]     w-fit object-cover' alt="" />
                            <Link to='/' className='    p-[1rem]'>Skincare</Link>
                        </div>
                        <div className="   hover:underline  flex flex-col items-center ">
                            <img src="/assets/img/ShopByCategory/Foundation.webp" className='h-[42vh]       w-fit object-cover' alt="" />
                            <Link to='/' className='    p-[1rem]'>Foundation</Link>
                        </div>
                        <div className="  hover:underline flex flex-col items-center ">
                            <img src="/assets/img/ShopByCategory/Newin.webp" className='h-[42vh]       w-fit object-cover' alt="" />
                            <Link to='/' className='   p-[1rem]'>New In </Link>
                        </div>
                    </div>
                </div>


            </div>
            <Link to='/'>
                <img src="/assets/img/App Promotion.webp" className='h-[85vh] w-full  md:h-full object-cover object-[40%_50%]' alt="" />
            </Link>

            <div className="bg-[#f5f3f3] px-3">
                <div className='max-w-[1300px] mx-auto'>
                    <div className="text-center text-[#3a080a]">
                        <h3 className='text-[28px] p-[24px] font-optima'>Charlotte Tilbury Exclusives</h3>
                        <div className="grid  flex-wrap grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
                            <div className="      hover:underline flex flex-col items-center ">
                                <img src="/assets/img/Exclusives/FreeMiniSkincareDuo.webp" className='h-[42vh]      w-fit object-cover' alt="" />
                                <Link to='/' className='   p-[1rem]'>Free Mini Skincare Duo!</Link>
                            </div>
                            <div className="      hover:underline   flex flex-col items-center ">
                                <img src="/assets/img/Exclusives/ExclusiveLoyaltyGift.png" className='h-[42vh]      w-fit object-cover' alt="" />
                                <Link to='/' className='   p-[1rem]'>Unlock An Exclusive Loyalty Gift!</Link>
                            </div>
                            <div className="     hover:underline  flex flex-col items-center ">
                                <img src="/assets/img/Exclusives/ExclusiveBridalBeautyKit.png" className='h-[42vh]       w-fit object-cover' alt="" />
                                <Link to='/' className='    p-[1rem]'>NEW! App-Exclusive Bridal Beauty Kit!</Link>
                            </div>
                            <div className="    hover:underline   flex flex-col items-center ">
                                <img src="/assets/img/Exclusives/SkincareKits.webp" className='h-[42vh]       w-fit object-cover' alt="" />
                                <Link to='/' className='   p-[1rem]'>Up To 15% Off Skincare Kits!</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='max-w-[1300px] mx-auto'>
                <div className=" text-center text-[#3a080a] px-3">
                    <h3 className='text-[28px] p-[24px] font-semibold  font-optima'>Find Your Perfect Makeup + Skincare Matches</h3>
                    <div className="grid flex-wrap grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
                        <div className="    hover:underline  flex flex-col items-center ">
                            <Link to='/'>
                                <img src="/assets/img/SkinMatches/FoundationShadeMatch.png" className='h-[42vh]    w-fit object-cover' alt="" />
                            </Link>
                            <Link to='/' className='   p-[1rem]'>Foundation Shade Match</Link>
                        </div>
                        <div className="    hover:underline flex flex-col items-center ">
                            <img src="/assets/img/SkinMatches/LipstickShadeMatch.png" className='h-[42vh]       w-fit object-cover' alt="" />
                            <Link to='/' className='    p-[1rem]'>Lipstick Shade Match</Link>
                        </div>
                        <div className="   hover:underline  flex flex-col items-center ">
                            <img src="/assets/img/SkinMatches/AnalyseYourSkin.png" className='h-[42vh]      w-fit object-cover' alt="" />
                            <Link to='/' className='    p-[1rem]'>Analyse Your Skin</Link>
                        </div>
                        <div className="  hover:underline flex flex-col items-center ">
                            <img src="/assets/img/SkinMatches/OnlineBeautyConsultation.jpeg" className='h-[42vh]      w-fit object-cover' alt="" />
                            <Link to='/' className='   p-[1rem]'>Book a 1:1 Online Beauty Consultation </Link>
                        </div>
                    </div>
                </div>
                <div className='relative'>

                    <Swiper
                        pagination={{
                            type: 'progressbar',
                        }}
                        slidesPerView={1}
                        breakpoints={{
                            //   480: {
                            //      slidesPerView: 2,
                            //    },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            //   1024: {
                            //     slidesPerView: 6,
                            //     //     spaceBetween: 30,
                            //     },
                            // 1440: {
                            //     slidesPerView: 4,
                            //     spaceBetween: 40,
                            // },
                        }}
                        navigation={{
                            prevEl: '.custom-prev-button',
                            nextEl: '.custom-next-button',



                        }}
                        observer={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {data.map((items, index) => (

                                <SwiperSlide key={index} >
                            <div className="w-full  relative">
                                    <img src={'/assets/img/Products/' + items.main_image} className='  w-full h-fit bg-[#f5f5f5] object-cover' alt="" />
                                    <div className="absolute right-3 bg-white p-2 rounded-full border-none border top-3">
                                        <Heart />
                                    </div>
                                    <div className="p-[16px] flex flex-col gap-3">
                                        <h3 className='font-bold font-helveticaN '>
                                            {items.name}
                                        </h3>
                                        <p>${items.price.toFixed(2)}</p>
                                        <button className='border  duration-200  uppercase font-helveticaN py-2 hover:bg-[#6e2132] hover:text-white border-[#3a080a]'>
                                            Add to Bag
                                        </button>
                                    </div>
        </div>
                                </SwiperSlide>
                    


                        ))}

                    </Swiper>

                    <button className='custom-prev-button absolute left-0 top-1/3  -translate-0.5 shadow-2xl bg-white/80 disabled:opacity-50'>
                        <ChevronLeft size={24} />
                    </button>
                    <button className='custom-next-button absolute right-0 top-1/3  -translate-0.5 shadow-2xl bg-white/80 disabled:opacity-50'>
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home