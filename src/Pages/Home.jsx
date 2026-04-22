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
import HeroDesktopBanner from '/assets/img/Hero.png';
import HeroMobileBanner from '/assets/img/HeroMobile.gif';
import AppPromotionBanner from '/assets/img/App Promotion.webp';
import BrandStoryVideo from '/assets/img/LEGENDARY_ORIGIN_EN_360.mp4';
import CategoryMakeup from '/assets/img/ShopByCategory/MakeUp.png';
import CategorySkincare from '/assets/img/ShopByCategory/Skincare.png';
import CategoryFoundation from '/assets/img/ShopByCategory/Foundation.webp';
import CategoryNewIn from '/assets/img/ShopByCategory/Newin.webp';
import PromoMiniSkincareDuo from '/assets/img/Exclusives/FreeMiniSkincareDuo.webp';
import PromoLoyaltyGift from '/assets/img/Exclusives/ExclusiveLoyaltyGift.png';
import PromoBridalBeautyKit from '/assets/img/Exclusives/ExclusiveBridalBeautyKit.png';
import PromoSkincareDiscount from '/assets/img/Exclusives/SkincareKits.webp';
import ServiceFoundationMatch from '/assets/img/SkinMatches/FoundationShadeMatch.png';
import ServiceLipstickMatch from '/assets/img/SkinMatches/LipstickShadeMatch.png';
import ServiceSkinAnalysis from '/assets/img/SkinMatches/AnalyseYourSkin.png';
import ServiceOnlineConsultation from '/assets/img/SkinMatches/OnlineBeautyConsultation.jpeg';
import ProductMagicCreamDuo from '/assets/img/Products/B13_-_MAGIC_CREAM_SETTING_SPRAY_DUO.png';
import ProductFlawlessFilterMini from '/assets/img/Products/HFFMINI-3-BESTSELLER-PDP.png';
import ProductFlawlessFilterPackshot from '/assets/img/Products/HFF-PACKSHOT-OPEN-4.png';
import ProductLipCheatPillowTalk from '/assets/img/Products/LIPCHEAT-PT-LEGENDARY-PDP.png';
import ProductMagicCream50ml from '/assets/img/Products/MC-50ml.png';
import axios from 'axios';
import { TbDiamondsFilled } from "react-icons/tb";

function Home() {
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
    const [heart, setHeart] = useState(false);

    const toogleHeart = () => {
        setHeart(!heart);
    };

    return (
        <div className='text-[#3a080a]'>
            <Link to='/'>
                <img src={HeroDesktopBanner} className='hidden md:block w-full' alt="Hero Desktop Banner" />
                <img src={HeroMobileBanner} className='md:hidden w-full block' alt="Hero Mobile Banner" />
            </Link>

            <div className='max-w-[1300px] mx-auto'>
                <div className="text-center px-3">
                    <h3 className='font-optima text-[28px] p-[24px]'>Shop By Category</h3>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
                        <div className="hover:underline flex flex-col items-center">
                            <Link to='/'>
                                <img src={CategoryMakeup} className='h-[42vh] xl:h-[] w-fit object-cover' alt="Makeup Category" />
                            </Link>
                            <Link to='/' className='p-[1rem]'>Makeup</Link>
                        </div>
                        <div className="hover:underline flex flex-col items-center">
                            <img src={CategorySkincare} className='h-[42vh] w-fit object-cover' alt="Skincare Category" />
                            <Link to='/' className='p-[1rem]'>Skincare</Link>
                        </div>
                        <div className="hover:underline flex flex-col items-center">
                            <img src={CategoryFoundation} className='h-[42vh] w-fit object-cover' alt="Foundation Category" />
                            <Link to='/' className='p-[1rem]'>Foundation</Link>
                        </div>
                        <div className="hover:underline flex flex-col items-center">
                            <img src={CategoryNewIn} className='h-[42vh] w-fit object-cover' alt="New In Category" />
                            <Link to='/' className='p-[1rem]'>New In</Link>
                        </div>
                    </div>
                </div>
            </div>

            <Link to='/'>
                <img src={AppPromotionBanner} className='h-[85vh] w-full md:h-full object-cover object-[40%_50%]' alt="App Promotion" />
            </Link>

            <div className="bg-[#f5f3f3] px-3">
                <div className='max-w-[1300px] mx-auto'>
                    <div className="text-center text-[#3a080a]">
                        <h3 className='text-[28px] p-[24px] font-optima'>Charlotte Tilbury Exclusives</h3>
                        <div className="grid flex-wrap grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
                            <div className="hover:underline flex flex-col items-center">
                                <img src={PromoMiniSkincareDuo} className='h-[42vh] w-fit object-cover' alt="Free Mini Skincare Duo" />
                                <Link to='/' className='p-[1rem]'>Free Mini Skincare Duo!</Link>
                            </div>
                            <div className="hover:underline flex flex-col items-center">
                                <img src={PromoLoyaltyGift} className='h-[42vh] w-fit object-cover' alt="Exclusive Loyalty Gift" />
                                <Link to='/' className='p-[1rem]'>Unlock An Exclusive Loyalty Gift!</Link>
                            </div>
                            <div className="hover:underline flex flex-col items-center">
                                <img src={PromoBridalBeautyKit} className='h-[42vh] w-fit object-cover' alt="Exclusive Bridal Beauty Kit" />
                                <Link to='/' className='p-[1rem]'>NEW! App-Exclusive Bridal Beauty Kit!</Link>
                            </div>
                            <div className="hover:underline flex flex-col items-center">
                                <img src={PromoSkincareDiscount} className='h-[42vh] w-fit object-cover' alt="Skincare Kits" />
                                <Link to='/' className='p-[1rem]'>Up To 15% Off Skincare Kits!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative px-[1rem] py-[2rem]'>
                <div className="text-center mb-[1rem]">
                    <h3 className='text-[28px] font-optima'>Trending Now</h3>
                    <p>Discover the beauty secrets the whole world has fallen in love with!</p>
                </div>

                <Swiper
                    pagination={{
                        type: 'progressbar',
                        hide: false,
                        draggable: true

                    }}
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        }
                    }}
                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button',
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
                    {trending.map((item, index) => (
                        <SwiperSlide key={index} className='h-auto'>
                            <div className="w-full   group relative">
                                <Link to='/DetailPage'>
                                    <img src={item.image} className='w-full h-fit    bg-[#f5f5f5] object-cover' alt={item.name} />
                                    <img src={item.image2} className='w-full h-fit    absolute inset-0  duration-300 hover:opacity-100 opacity-0    bg-[#f5f5f5] object-cover' alt={item.name} />
                                </Link>
<Link to='/'> </Link>
                                <div onClick={() => toogleHeart(item.index)} className={`absolute ${heart ? 'border-[#3a080a]' : 'border-none'} right-3 bg-white p-2 rounded-full border top-3 cursor-pointer`}>
                                    {heart ? <FaHeart size={22} /> : <FaRegHeart size={22} />}
                                </div>

                                <div className="p-[10px]  text-[1rem]     font-helveticaN  ">
                                    <div className="px-[1rem] text-sm  ">
                                        <Link to='/DetailPage'>
                                            <h3 className='font-bold  uppercase  line-clamp-1'>{item.title}</h3>
                                            <p className=' '>{item.title2}</p>
                                        </Link>


                                    </div>
                                    <div className=" mt-15">
                                        <p className="ml-[1rem] text-sm font-bold ">$23.00</p>


                                    </div>


                                </div>
                                <Link to='/DetailPage'>
                                    <button className='border mt-auto duration-200 w-full font-helveticaN   uppercase py-2 hover:bg-[#6e2132] hover:text-white border-[#3a080a]'>
                                        Add to basket
                                    </button>

                                </Link>


                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className='custom-prev-button hidden md:block absolute right-14 top-[7.5%] -translate-y-1/2 shadow-2xl z-10 disabled:opacity-50'>
                    <ChevronLeft size={36} />
                </button>
                <button className='custom-next-button hidden md:block absolute right-2 top-[7.5%] -translate-y-1/2 shadow-2xl z-10 disabled:opacity-50'>
                    <ChevronRight size={36} />
                </button>
            </div>
            <div className='max-w-[1300px] mx-auto'>
                <div className="text-center text-[#3a080a] px-3">
                    <h3 className='text-[28px] p-[24px] font-semibold font-optima'>Find Your Perfect Makeup + Skincare Matches</h3>
                    <div className="grid flex-wrap grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mb-[24px]">
                        <div className="hover:underline flex flex-col items-center">
                            <Link to='/'>
                                <img src={ServiceFoundationMatch} className='h-[42vh] w-fit object-cover' alt="Foundation Shade Match" />
                            </Link>
                            <Link to='/' className='p-[1rem]'>Foundation Shade Match</Link>
                        </div>
                        <div className="hover:underline flex flex-col items-center">
                            <img src={ServiceLipstickMatch} className='h-[42vh] w-fit object-cover' alt="Lipstick Shade Match" />
                            <Link to='/' className='p-[1rem]'>Lipstick Shade Match</Link>
                        </div>
                        <div className="hover:underline flex flex-col items-center">
                            <img src={ServiceSkinAnalysis} className='h-[42vh] w-fit object-cover' alt="Analyse Your Skin" />
                            <Link to='/' className='p-[1rem]'>Analyse Your Skin</Link>
                        </div>
                        <div className="hover:underline flex flex-col items-center">
                            <img src={ServiceOnlineConsultation} className='h-[42vh] w-fit object-cover' alt="Book a 1:1 Online Beauty Consultation" />
                            <Link to='/' className='p-[1rem]'>Book a 1:1 Online Beauty Consultation</Link>
                        </div>
                    </div>
                </div>




            </div>

            <div className="max-w-[900px] mx-auto mb-[2rem]">
                <div className="bg-[#f5f5f5] text-center">
                    <h3 className='text-[28px] py-[1rem] font-optima'>Legendary Beauty For A Reason</h3>
                    <video src={BrandStoryVideo} autoPlay muted loop playsInline className='m-auto' />
                    <p className='py-[24px] flex gap-3  md:flex-row flex-col justify-center items-center font-bold font-helveticaN uppercase'><span> Makeup artist to the stars </span> <TbDiamondsFilled size={22} style={{ transform: 'scaleX(0.7)' }} /> <span>Skincare performance expert </span> <TbDiamondsFilled size={22} style={{ transform: 'scaleX(0.7)' }} /><span> Fragrance innovator </span> </p>
                </div>
            </div>
        </div>
    );
}

export default Home;