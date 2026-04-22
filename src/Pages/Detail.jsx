
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
function Detail() {
      const [trending, setTrending] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('/Data/TrendingNow.json')
                setTrending(response.data)
            }
            catch (error) {
                console.error(error);

            }

        }
        fetchdata()

    }, [])
  return (
    <div>
      {
trending.map((items,index)=>(
  <img src={items.image} alt="" />

))
      }
   
       
    </div>
  )
}

export default Detail