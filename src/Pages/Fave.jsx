import React from 'react';
import { Link } from 'react-router';
import { useWishlist } from '../Context/WishlistContext';
import { useBasket } from '../Context/BasketContext';
import { X } from 'lucide-react';

function Fave() {
    const { wishlist, removeFromWishlist } = useWishlist();
    const { handleAddtoBasket } = useBasket();

    return (
        <main className="bg-white  font-helveticaN py-12 px-4 md:px-5">
            <div className="container max-w-[1024px] mx-auto px-[16px]">
                    <h1 className="font-helveticaN text-[28px] text-[#340c0c] uppercase  mb-[8px]">
                        WISHLIST
                    </h1>

                {wishlist.length === 0 ? (
                    <section className="flex flex-col items-center justify-center py-16 text-center">
                        <p className="text-[#340c0c]  font-helveticaN max-w-[500px] mb-[16px] leading-relaxed">
                           Keep a list of all the gorgeous Charlotte Tilbury beauty products you love, or are dying to try next! You can log in on any device to see your saved wishlist.
                        </p>
                        <Link
                            to="/"
                            className="border border-[#340c0c] text-[#340c0c] px-12 py-3.5 hover:bg-[#340c0c] hover:text-white transition-colors duration-300 font-helveticaN uppercase tracking-widest text-[13px] font-bold"
                        >
                            BEST SELLERS
                        </Link>
                    </section>
                ) : (
                    <>
                        <p className="text-[#340c0c] font-helveticaN max-w-[500px] mb-[16px]">
                            Keep a list of all the gorgeous Charlotte Tilbury beauty products you love, or are dying to try next! You can log in on any device to see your saved wishlist.
                        </p>
                        <section className="grid grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-x-4 gap-y-10">
                            {wishlist.map((item, idx) => {
                                const shadeImage = item.selectedShade?.gallery?.[0] || item.selectedShade?.galleryImages?.[0] || item.selectedShade?.swatchImage;
                                const displayImage = shadeImage || item.cardImages?.main || item.images?.main || item.image;
                                const shadeName = item.selectedShade?.name || item.shade || item.subtitle || item.subTitle || "Standard Size";

                                return (
                                    <article key={`${item.title}-${shadeName}-${idx}`} className="flex flex-col w-[236px] m-[1rem_1rem_1rem_0] relative group">
                                        <div className="relative bg-[#f9f8f6] aspect-[5/5] flex justify-center items-center mb-4 overflow-hidden">
                                            <button
                                                onClick={() => removeFromWishlist(item)}
                                                className="absolute top-3 left-3 text-[#340c0c]   transition-transform z-10 p-1"
                                                aria-label="Remove from wishlist"
                                            >
                                                <X size={20} strokeWidth={1} />
                                            </button>
                                            <Link to="/product" state={{ product: item }} className="absolute inset-0 w-full h-full flex justify-center items-center">
                                                {/* Main Image */}
                                                <img
                                                    src={displayImage}
                                                    alt={item.title}
                                                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply "
                                                    loading="lazy"
                                                />
                                            </Link>
                                        </div>
                                        <div className="flex flex-col flex-grow">
                                            <Link to="/product" state={{ product: item }} className="group-hover:text-[#856d6d] transition-colors">
                                                <h3 className="font-optima uppercase text-[14px] font-bold text-[#340c0c] tracking-wide line-clamp-1 group-hover:underline">
                                                    {item.title}
                                                </h3>
                                                {item.category && (
                                                    <p className="text-[#a06464] uppercase text-[10px] font-bold tracking-widest mt-1 mb-0.5 line-clamp-1">
                                                        {item.category}
                                                    </p>
                                                )}
                                                <p className="text-[#856d6d] uppercase text-[11px] tracking-wider mb-2 mt-0.5 line-clamp-1">
                                                    {shadeName}
                                                </p>
                                            </Link>
                                            <div className="mt-auto pt-2">
                                                <p className="text-[#340c0c] font-medium text-[15px] mb-4">{item.selectedShade?.price || item.price}</p>
                                                <button
                                                    onClick={() => handleAddtoBasket(item)}
                                                    className="w-full border border-[#340c0c] text-[#340c0c] py-2.5 hover:bg-[#340c0c] hover:text-white transition-colors duration-300 font-helveticaN uppercase tracking-wider text-[12px]"
                                                >
                                                    ADD TO BAG
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                        </section>
                    </>
                )}
            </div>
        </main>
    );
}

export default Fave;