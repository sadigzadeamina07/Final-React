import React, { useState, useEffect, useRef, useCallback } from 'react';

const CustomScrollbar = ({ scrollRef }) => {
    const [thumbWidth, setThumbWidth] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    
    const trackRef = useRef(null);
    
    const updateScrollState = useCallback(() => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // dynamic width representing the ratio of visible area
        const ratio = clientWidth / scrollWidth;
        setThumbWidth(ratio * 100);

        // Left position percentage
        const maxScrollLeft = scrollWidth - clientWidth;
        const leftPercent = maxScrollLeft > 0 ? (scrollLeft / scrollWidth) * 100 : 0;
        setScrollLeftPos(leftPercent);
    }, [scrollRef]);

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', updateScrollState);
            setTimeout(updateScrollState, 100);
            window.addEventListener('resize', updateScrollState);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', updateScrollState);
            }
            window.removeEventListener('resize', updateScrollState);
        };
    }, [scrollRef, updateScrollState]);

    // Drag Logic
    const handlePointerDown = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handlePointerMove = useCallback((e) => {
        if (!isDragging || !trackRef.current || !scrollRef.current) return;
        
        const trackRect = trackRef.current.getBoundingClientRect();
        const { scrollWidth, clientWidth } = scrollRef.current;
        
        // Calculate pointer position relative to track
        let pointerX = e.clientX - trackRect.left;
        
        // Constrain pointerX to track bounds
        pointerX = Math.max(0, Math.min(pointerX, trackRect.width));
        
        // Calculate the center offset of the thumb
        const thumbPixelWidth = (thumbWidth / 100) * trackRect.width;
        
        // We want the pointer to drag the *center* of the thumb if possible, 
        // or just map the pointer directly to the scroll percentage.
        // A simpler robust way: map pointerX directly to scrollLeft
        const percentage = pointerX / trackRect.width;
        
        // To make it feel natural, the max travel of the thumb is (trackWidth - thumbWidth)
        // We calculate what scrollLeft would position the thumb exactly under the mouse.
        // But the easiest mapping is: thumb's left edge maps to scrollLeft.
        // Let's adjust so dragging feels centered:
        let newThumbLeft = pointerX - (thumbPixelWidth / 2);
        
        // Constrain thumb left
        const maxThumbLeft = trackRect.width - thumbPixelWidth;
        newThumbLeft = Math.max(0, Math.min(newThumbLeft, maxThumbLeft));
        
        const scrollPercentage = newThumbLeft / maxThumbLeft;
        
        const maxScrollLeft = scrollWidth - clientWidth;
        scrollRef.current.scrollLeft = scrollPercentage * maxScrollLeft;
    }, [isDragging, scrollRef, thumbWidth]);

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('pointermove', handlePointerMove);
            window.addEventListener('pointerup', handlePointerUp);
        } else {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        }
        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('pointerup', handlePointerUp);
        };
    }, [isDragging, handlePointerMove, handlePointerUp]);

    if (thumbWidth >= 100) return null;

    return (
        <div 
            ref={trackRef}
            className={`w-[190px] mx-auto py-3 mt-4 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onPointerDown={handlePointerDown}
        >
            <div className="w-full h-[2px] bg-[#E5E5E5] relative rounded-sm overflow-hidden">
                <div 
                    className="absolute top-0 h-full bg-[#3a080a] transition-none rounded-sm"
                    style={{ 
                        width: `${thumbWidth}%`,
                        left: `${scrollLeftPos}%`,
                        transition: isDragging ? 'none' : 'left 0.3s ease-out'
                    }}
                />
            </div>
        </div>
    );
};

export default CustomScrollbar;
