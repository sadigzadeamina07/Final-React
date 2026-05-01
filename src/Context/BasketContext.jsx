import React, { createContext, useState, useContext, useEffect } from 'react';
const BasketContext = createContext()
export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [Basketopen, setBasketOpen] = useState(false)
  useEffect(() => {
    if (Basketopen) {
      document.body.style.overflow = 'hidden'
    }
    else {
      document.body.style.overflow = 'auto'
    }
  }, [Basketopen])
  const handleAddtoBasket = (product) => {
    setBasket((prevBasket) => {
      const isExist = prevBasket.find((item) => item.title === product.title)
      if (isExist) {
        return prevBasket.map((item) => item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prevBasket, { ...product, quantity: 1 }]
    })
    setBasketOpen(true)
  }

  const ToggleBasket = () => {

    setBasketOpen(!Basketopen)
  }
  const CloseBasket = () => {
    setBasketOpen(false)
  }
  return (
    <BasketContext.Provider value={{ basket, handleAddtoBasket, ToggleBasket, CloseBasket, setBasketOpen, Basketopen }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => { return useContext(BasketContext); };
