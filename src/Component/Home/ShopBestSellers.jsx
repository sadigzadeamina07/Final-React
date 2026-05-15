import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

import { useBasket } from '../../Context/BasketContext';
import { useWishlist } from '../../Context/WishlistContext';

function ShopBestSellers() {
    const [bestSellers, setBestSellers] = useState([]);
    const { handleAddtoBasket } = useBasket();
    const { toggleWishlist, isInWishlist } = useWishlist();

    useEffect(() => {
        const fetchBestSellers = async () => {
            try {
                const response = await axios.get('/Data/CharlotteTilbury_BestSellers_Full.json');
                setBestSellers(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBestSellers();
    }, []);

    if (!bestSellers.length) return null;

    return (
        <div className='relative px-[1rem] py-[2rem]'>
            <div className="text-center mb-[1rem]">
                <h3 className='text-[28px] font-optima'>Shop Best Sellers</h3>
            </div>

            <Swiper
                pagination={{
                    type: 'progressbar',
                    hide: false,
                    draggable: true
                }}
                slidesPerView={2}
                spaceBetween={10}
                allowTouchMove={true}
                breakpoints={{
                            768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                        allowTouchMove: false,
                    },
                    1440: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                              allowTouchMove: false,
                    }
                }}
                navigation={{
                    prevEl: '.bestsellers-prev-button',
                    nextEl: '.bestsellers-next-button',
                }}
                observer={true}
                modules={[Pagination, Navigation, Scrollbar]}
                className="mySwiper relative !pb-10 
      [&_.swiper-pagination-progressbar]:!bg-gray-200 
[&_.swiper-pagination-progressbar]:!h-[4px] 
[&_.swiper-pagination-progressbar]:!w-[200px] 
[&_.swiper-pagination-progressbar]:!top-auto 
[&_.swiper-pagination-progressbar]:!bottom-0 
[&_.swiper-pagination-progressbar]:!left-1/2 
[&_.swiper-pagination-progressbar]:!-translate-x-1/2 
[&_.swiper-pagination-progressbar]:!rounded-full 

[&_.swiper-pagination-progressbar-fill]:!bg-[#3a080a] 
[&_.swiper-pagination-progressbar-fill]:!rounded-full
       "
            >
                {bestSellers.map((item, index) => {
                    const isLiked = isInWishlist(item);
                    return (
                        <SwiperSlide key={index} className='!h-auto flex'>
                            <div className="w-full group relative flex flex-col h-full">
                                <Link to='/product' state={{ product: item }} className="relative block">
                                    <img src={item.images?.main || item.cardImages?.main} className='w-full h-fit bg-[#f5f5f5] object-cover' alt={item.title} />
                                    <img src={item.images?.hover || item.cardImages?.hover || item.images?.main} className='w-full h-fit absolute inset-0 duration-300 hover:opacity-100 opacity-0 bg-[#f5f5f5] object-cover' alt={item.title} />
                                </Link>
                                <div onClick={() => toggleWishlist(item)} className={`absolute ${isLiked ? 'border-[#3a080a]' : 'border-none'} right-3 bg-white p-2 rounded-full border top-3 cursor-pointer hover:scale-110 transition-transform`}>
                                    {isLiked ? <FaHeart size={22} color="#3a080a" /> : <FaRegHeart size={22} color="#3a080a" />}
                                </div>

                                <div className="flex flex-col flex-1 p-[10px] text-[1rem] font-helveticaN">
                                    <div className="px-[1rem] text-sm min-h-[3.5rem]">
                                        <Link to='/product' state={{ product: item }}>
                                            <h3 className='font-bold uppercase line-clamp-1'>{item.title}</h3>
                                            <p className='line-clamp-2'>{item.subtitle || item.subTitle}</p>
                                        </Link>
                                    </div>
                                    <div className="mt-auto pt-2">
                                        <p className="ml-[1rem] text-sm font-bold">{item.price}</p>
                                    </div>
                                </div>
                                <button onClick={() => handleAddtoBasket(item)} className='border duration-200 w-full font-helveticaN uppercase py-2 hover:bg-[#6e2132] hover:text-white border-[#3a080a]'>
                                    Add to basket
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>

            <button className='bestsellers-prev-button hidden md:block absolute left-1 lg:left-auto lg:right-14 top-[7.5%] -translate-y-1/2 shadow-2xl z-10 disabled:opacity-50 bg-white/80 lg:bg-transparent rounded-full p-1 lg:p-0'>
                <ChevronLeft size={24} className="lg:hidden" />
                <ChevronLeft size={36} className="hidden lg:block" />
            </button>
            <button className='bestsellers-next-button hidden md:block absolute right-1 lg:right-2 top-[7.5%] -translate-y-1/2 shadow-2xl z-10 disabled:opacity-50 bg-white/80 lg:bg-transparent rounded-full p-1 lg:p-0'>
                <ChevronRight size={24} className="lg:hidden" />
                <ChevronRight size={36} className="hidden lg:block" />
            </button>
        </div>
    );
}

export default ShopBestSellers;
