
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
import { TbDiamondsFilled } from "react-icons/tb";
import { useProduct } from '../Context/DataContext';
function Detail() {
    const {trending} =useProduct()
  return (
    <div>
      {
trending.slice(0,1).map((items,index)=>(
  <img src={items.image} alt="" />

))
      }
   
       
    </div>
  )
}

export default Detail