import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { BasketProvider, useBasket } from '../../Context/BasketContext';
import { useProduct } from '../../Context/DataContext';
import { useWishlist } from '../../Context/WishlistContext';
import CustomScrollbar from '../CustomScrollbar';

function TrendingNow() {
    const { trending } = useProduct();
    const { handleAddtoBasket } = useBasket();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className='relative px-[1rem] py-[2rem]'>
            <div className="text-center mb-[1rem]">
                <h3 className='text-[28px] font-optima'>Trending Now</h3>
                <p>Discover the beauty secrets the whole world has fallen in love with!</p>
            </div>

            <div className="relative group mt-4">
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-[10px] md:gap-[10px] lg:gap-[20px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4"
                >
                    {trending.map((item, index) => {
                        const isLiked = isInWishlist(item);
                        return (
                            <div key={index} className="w-[calc(50%-5px)] md:w-[calc(25%-7.5px)] xl:w-[calc(16.666%-16.66px)] shrink-0 snap-start h-auto flex">
                                <div className="w-full group relative flex flex-col h-full border border-transparent">
                                    <Link to='/product' state={{ product: item }} className="relative block">
                                        <img src={item.images?.main || item.cardImages?.main} className='w-full h-fit bg-[#f5f5f5] object-cover aspect-square' alt={item.title} />
                                        <img src={item.images?.hover || item.cardImages?.hover || item.images?.main} className='w-full h-fit absolute inset-0 duration-300 hover:opacity-100 opacity-0 bg-[#f5f5f5] object-cover aspect-square' alt={item.title} />
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
                                    <button onClick={() => handleAddtoBasket(item)} className='border duration-200 w-full font-helveticaN uppercase py-2 hover:bg-[#6e2132] hover:text-white border-[#3a080a] mt-auto'>
                                        Add to basket
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <CustomScrollbar scrollRef={scrollRef} />
            </div>

            <button onClick={scrollLeft} className='hidden md:block absolute left-1 lg:left-auto lg:right-14 top-[7.5%] -translate-y-1/2 shadow-2xl z-10 disabled:opacity-50 bg-white/80 lg:bg-transparent rounded-full p-1 lg:p-0'>
                <ChevronLeft size={24} className="lg:hidden" />
                <ChevronLeft size={36} className="hidden lg:block" />
            </button>
            <button onClick={scrollRight} className='hidden md:block absolute right-1 lg:right-2 top-[7.5%] -translate-y-1/2 shadow-2xl z-10 disabled:opacity-50 bg-white/80 lg:bg-transparent rounded-full p-1 lg:p-0'>
                <ChevronRight size={24} className="lg:hidden" />
                <ChevronRight size={36} className="hidden lg:block" />
            </button>
        </div>
    );
}

export default TrendingNow;