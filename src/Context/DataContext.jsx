import React, { useState, createContext, useContext } from 'react';
import trendingData from '../Data/CharlotteTilbury_TrendingNow_Full.json';
import bestSellersData from '../Data/CharlotteTilbury_BestSellers_Full.json';

const ProductContext = createContext();

export const countriesList = {
  EUROPE: [
    { name: 'Austria', currency: 'EUR €' },
    { name: 'Belgium', currency: 'EUR €' },
    { name: 'France - English', currency: 'EUR €' },
    { name: 'Germany - English', currency: 'EUR €' },
    { name: 'United Kingdom', currency: 'GBP £' },
  ],
  AMERICAS: [
    { name: 'United States', currency: 'USD $' },
    { name: 'Canada', currency: 'CAD $' },
  ],
  'MIDDLE EAST': [
    { name: 'UAE', currency: 'AED د.إ' },
    { name: 'Saudi Arabia', currency: 'SAR ﷼' },
  ],
  'ASIA PACIFIC': [
    { name: 'Australia', currency: 'AUD $' },
    { name: 'Japan', currency: 'JPY ¥' },
    { name: 'South Korea', currency: 'KRW ₩' },
  ],
};

export const DataProvider = ({ children }) => {
    const defaultTrending = Array.isArray(trendingData) ? trendingData : (trendingData?.default || []);
    const defaultBestSellers = Array.isArray(bestSellersData) ? bestSellersData : (bestSellersData?.default || []);
    
    const [trending, setTrending] = useState(defaultTrending);
    const [bestSellers, setBestSellers] = useState(defaultBestSellers);
    const [selectedCountry, setSelectedCountry] = useState(countriesList['AMERICAS'][0]);

    return (
        <ProductContext.Provider value={{ 
            trending, 
            bestSellers, 
            setTrending, 
            setBestSellers,
            selectedCountry,
            setSelectedCountry,
            countries: countriesList
        }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    return useContext(ProductContext);
};