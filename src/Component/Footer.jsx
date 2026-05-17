import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { ChevronDown, Globe, X, Plus, Minus } from 'lucide-react';

import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaInstagram, FaTiktok, FaYoutube, FaTwitch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/pagination';

function Footer() {
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [openMenu, setOpenMenu] = useState('');
  const [countryOpen, setCountryOpen] = useState(false);
  const [desktopCountryOpen, setDesktopCountryOpen] = useState(false);
  const [tempDesktopCountryName, setTempDesktopCountryName] = useState('');

  const countries = {
    EUROPE: [
      { name: 'Austria', currency: 'EUR €' },
      { name: 'Belgium', currency: 'EUR €' },
      { name: 'France - English', currency: 'EUR €' },
      { name: 'Germany - English', currency: 'EUR €' },
    ],
    'NORTH AMERICA': [
      { name: 'United States', currency: 'USD $' },
      { name: 'Canada', currency: 'CAD $' },
    ],
    'MIDDLE EAST': [
      { name: 'UAE', currency: 'AED د.إ' },
      { name: 'Saudi Arabia', currency: 'SAR ﷼' },
    ],
    'ASIA & PACIFIC': [
      { name: 'Australia', currency: 'AUD $' },
      { name: 'Japan', currency: 'JPY ¥' },
      { name: 'South Korea', currency: 'KRW ₩' },
    ],
  };

  const [selectedCountry, setSelectedCountry] = useState(
    countries['NORTH AMERICA'][0]
  );

  const footerLinks = {
    About: [
      'Store Locator',
      'About Charlotte',
      'Careers',
      'Privacy Policy',
      'Cookies Policy',
    ],
    Support: [
      'Customer Care',
      'Shipping',
      'Returns',
      'FAQ',
      'My Account',
    ],
    'More from Charlotte': [
      'Refer a Friend',
      'Subscribe and Save',
      'Promotions and Savings',
      "Charlotte's Magic Change",
      'Accessibility Statement',
    ],
  };

  const topCards = [
    {
      img: '/assets/img/Footer/Bus.png',
      title: 'Free Delivery',
      text: 'on all orders over £49',
      width: 'w-20',
    },
    {
      img: '/assets/img/Footer/Lips.png',
      title: 'Get 2 free samples',
      text: 'with all orders',
      width: 'w-24',
    },
    {
      img: '/assets/img/Footer/Logo.png',
      title: 'Unlock rewards and benefits',
      text: "with Charlotte's Darlings Loyalty Club",
      width: 'w-16',
    },
    {
      img: '/assets/img/Footer/Miror.png',
      title: 'Complete your Beauty Profile',
      text: 'to get personalised recommendations',
      width: 'w-14',
    },
    {
      img: '/assets/img/Footer/Phone.png',
      title: 'Download the App',
      text: 'Easy beauty for you',
      width: 'w-16',
    },
    {
      img: '/assets/img/Footer/Phone.png',
      title: 'Book a 1:1 Online Beauty Consultation',
      text: "With Charlotte's pro makeup artists.",
      width: 'w-16',
    },
  ];

  if (location.pathname === '/search') return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError('Enter your email');
      return;
    }

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!validEmail.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setError('');
    setEmail('');
  };

  return (
    <footer className="w-full overflow-hidden text-[#340c0c]">
      {/* top cards */}
      <div className="bg-[#f5f3f3]">
        <div className="mx-auto w-full max-w-[1300px] overflow-hidden py-6">
          {/* desktop/tablet */}
          <div className="hidden min-[1000px]:grid min-[1000px]:grid-cols-3 lg:grid-cols-6 gap-[30px] justify-items-center">
            {topCards.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="flex h-[50px] items-center justify-center mb-[10px]">
                  <img src={item.img} alt="" className={item.width} />
                </div>
                <h3 className="font-bold uppercase text-[14px] leading-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-tight">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* mobile slider */}
          <div className="max-[999px]:block min-[1000px]:hidden">
            <Swiper
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              className="pb-14 [&_.swiper-pagination-bullet-active]:!bg-[#333333]"
            >
              {topCards.map((item) => (
                <SwiperSlide key={item.img}>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-[50px] items-center justify-center mb-[10px]">
                      <img src={item.img} alt="" className={item.width} />
                    </div>
                    <h3 className="font-bold uppercase text-[14px] leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-tight">{item.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Main Footer Block */}
      <div className="bg-[#ffffff]">
        <div className="mx-auto w-full max-w-[1400px] px-[20px] lg:py-[50px] pt-10 pb-10">
          <div className="flex flex-col lg:flex-row-reverse lg:justify-between">
            {/* Right Side (Sign Up) - Appears first on mobile */}
            <div className="w-full lg:w-[35%] lg:pl-10 mb-10 lg:mb-0 flex flex-col text-center lg:text-left">
              <h3 className="font-helveticaN text-[14px] font-bold uppercase text-[#333333]">
                Sign up to receive emails
              </h3>
              <p className="mb-6 mt-3 text-[13px] leading-6 text-[#333333]">
                Be the first to know about products, offers and tips
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col w-full text-left">
                <span className="hidden lg:block mb-2 text-[13px] text-[#333333]">
                  Email Address
                </span>
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-2">
                  <input
                    type="email"
                    value={email}
                    placeholder="Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className={`h-[45px] w-full lg:flex-1 border bg-white px-4 outline-none text-[13px] rounded-none ${
                      error ? 'border-red-500' : 'border-[#ccc]'
                    }`}
                  />
                  <button
                    type="submit"
                    className="h-[45px] w-full lg:w-[120px] bg-[#d3d3d3] hover:bg-[#c0c0c0] transition-colors text-white font-bold uppercase text-[14px] flex items-center justify-center shrink-0 rounded-none"
                  >
                    SIGN UP
                  </button>
                </div>
                {error && <p className="mt-2 text-[12px] text-red-500 text-left">{error}</p>}
              </form>

              <p className="mt-4 text-[11px] leading-5 text-left text-[#333333]">
                *T&Cs apply. By submitting your email address, you agree to receive marketing information about Charlotte Tilbury Beauty Limited's products or services by email and social media platforms. For more information about how we use your personal information, please see our <a href="#" className="underline">Privacy Policy</a>. You can unsubscribe at any time by contacting us.
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex items-center justify-center lg:justify-end gap-[20px] text-[20px] text-[#333333] lg:mt-auto">
                <BiLogoFacebookSquare />
                <FaInstagram />
                <FaTiktok />
                <FaXTwitter />
                <FaYoutube />
                <FaTwitch />
              </div>

              {/* Mobile Shipping To (Only visible on mobile) */}
              <div className="mt-10 lg:hidden text-left">
                <h3 className="font-bold uppercase text-[14px] text-[#333333] mb-4">SHIPPING TO</h3>
                <button
                  onClick={() => setCountryOpen(true)}
                  className="flex items-center gap-1 hover:underline text-[#333333] font-sans"
                >
                  <span className="text-[13px]">
                    {selectedCountry.name} | EN | {selectedCountry.currency}
                  </span>
                </button>
              </div>
            </div>

            {/* Left Side (Links) */}
            <div className="w-full lg:w-[65%] lg:pr-10 lg:border-r lg:border-[#e5e5e5] flex flex-col lg:grid lg:grid-cols-3 lg:gap-[30px] lg:pt-0 border-b border-[#e5e5e5] lg:border-b-0">
              {Object.entries(footerLinks).map(([title, items]) => {
                const active = openMenu === title;

                return (
                  <div key={title} className="border-t border-[#e5e5e5] lg:border-0 w-full">
                    {/* Mobile Accordion Header */}
                    <button
                      onClick={() => setOpenMenu(active ? '' : title)}
                      className="flex w-full items-center justify-between py-4 lg:hidden"
                    >
                      <h3 className="font-bold uppercase text-[14px] text-[#333333]">
                        {title}
                      </h3>
                      <ChevronDown size={18} className={`text-[#333333] transition-transform duration-300 ${active ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Desktop/Tablet Header */}
                    <h3 className="hidden lg:block font-bold uppercase text-[14px] text-[#333333] mb-4">
                      {title}
                    </h3>
                    
                    {/* Links List */}
                    <div
                      className={`overflow-hidden transition-all duration-300 lg:max-h-full lg:overflow-visible ${
                        active ? 'max-h-[500px] pb-4' : 'max-h-0'
                      }`}
                    >
                      <ul className="flex flex-col gap-[16px]">
                        {items.map((item) => (
                          <li key={item}>
                            <Link to="/home" className="text-[13px] text-[#333333] hover:underline flex items-center min-h-[30px] lg:min-h-0">
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {/* Desktop Shipping To (Only under ABOUT) */}
                      {title === 'About' && (
                        <div className="hidden lg:block mt-[60px] relative">
                           <h3 className="font-bold uppercase text-[14px] text-[#333333] mb-4">SHIPPING TO</h3>
                           <button
                             onClick={() => {
                               setTempDesktopCountryName(selectedCountry.name);
                               setDesktopCountryOpen(!desktopCountryOpen);
                             }}
                             className="flex items-center gap-1 hover:underline text-[#333333]"
                           >
                             <span className="text-[13px]">
                               {selectedCountry.name} | EN | {selectedCountry.currency}
                             </span>
                           </button>

                           {/* Desktop Shipping Popover */}
                           {desktopCountryOpen && (
                             <div className="absolute bottom-[calc(100%+15px)] left-0 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] p-5 w-[320px] z-[100] border border-[#eae6e6]">
                               <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b border-r border-[#eae6e6] transform rotate-45 shadow-[2px_2px_5px_rgba(0,0,0,0.05)]"></div>
                               <div className="mb-4 relative z-10">
                                 <label className="block text-[13px] font-sans text-[#333333] mb-2 font-medium">Shipping to*</label>
                                 <div className="relative">
                                   <select 
                                      value={tempDesktopCountryName}
                                      onChange={(e) => setTempDesktopCountryName(e.target.value)}
                                      className="w-full border border-[#ccc] text-[13px] text-[#333333] p-3 appearance-none outline-none focus:border-[#333333] bg-white cursor-pointer rounded-none"
                                    >
                                      <option value="">Please Select</option>
                                      {Object.entries(countries).flatMap(([_, list]) => list).map(c => (
                                        <option key={c.name} value={c.name}>{c.name}</option>
                                      ))}
                                   </select>
                                   <ChevronDown size={16} strokeWidth={1.5} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#333333] pointer-events-none" />
                                 </div>
                               </div>
                               <button 
                                 disabled={!tempDesktopCountryName}
                                 onClick={() => {
                                    const allCountries = Object.entries(countries).flatMap(([_, list]) => list);
                                    const found = allCountries.find(c => c.name === tempDesktopCountryName);
                                    if(found) {
                                        setSelectedCountry(found);
                                        setDesktopCountryOpen(false);
                                    }
                                 }}
                                 className={`w-full transition-colors text-white font-bold uppercase text-[14px] py-3 tracking-wider relative z-10 rounded-none ${tempDesktopCountryName ? 'bg-[#333333] hover:bg-black cursor-pointer' : 'bg-[#d3d3d3] cursor-not-allowed'}`}
                               >
                                 CONTINUE
                               </button>
                             </div>
                           )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Bottom Sheet for Mobile */}
      {countryOpen && (
        <>
          <style>{`
            @keyframes slideUp {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
            }
          `}</style>
          <div className="fixed inset-0 z-[300] bg-black/40">
            <div onClick={() => setCountryOpen(false)} className="absolute inset-0"></div>
            <div 
              className="absolute bottom-0 left-0 w-full max-h-[85vh] bg-white flex flex-col rounded-t-[22px] md:bottom-auto md:left-1/2 md:top-1/2 md:w-[480px] md:h-auto md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-[22px]"
              style={{ animation: 'slideUp 0.3s ease-out' }}
            >
              {/* header */}
              <div className="flex items-center justify-between border-b border-[#e5e5e5] px-6 py-6">
                <h2 className="font-bold uppercase text-[14px]">
                  Shipping To
                </h2>
                <button onClick={() => setCountryOpen(false)}>
                  <X size={24} strokeWidth={1.5} className="text-[#333333]" />
                </button>
              </div>

              {/* countries */}
              <div className="flex-1 overflow-y-auto max-h-full md:max-h-[75vh]">
                {Object.entries(countries).map(([region, list]) => (
                  <div key={region}>
                    <h3 className="px-6 py-4 text-[13px] font-bold uppercase">
                      {region}
                    </h3>
                    {list.map((country) => {
                      const active = selectedCountry.name === country.name;
                      return (
                        <button
                          key={country.name}
                          onClick={() => {
                            setSelectedCountry(country);
                            setCountryOpen(false);
                          }}
                          className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-[#faf8f8] transition-colors"
                        >
                          <span className="text-[15px] text-[#333333]">
                            {country.name} ({country.currency})
                          </span>
                          {active && <span className="text-[22px] text-[#333333]">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* images */}
      <img
        src="/assets/img/Footer/footer.webp"
        alt=""
        className="hidden w-full object-cover md:block"
      />
      <img
        src="/assets/img/Footer/footermobile.png"
        alt=""
        className="block w-full object-cover md:hidden"
      />

      {/* bottom */}
      <div className="px-6 py-8 text-xs bg-white border-t border-[#e5e5e5]">
        <p className="text-center md:text-left text-[#555]">
          2013-2026 © Charlotte Tilbury Beauty Inc.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;