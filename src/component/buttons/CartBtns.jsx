"use client"
import React, { useState } from 'react';

const CartBtns = () => {
    const [inCart,setInCart] = useState(false);

    const handleAdd2Cart = () => (
        setInCart(true)
    )
    
    return (
        <button 
        onClick={handleAdd2Cart}
        disabled={inCart}
        className="w-full rounded-lg bg-orange-500 disabled:border-1 disabled:text-orange-300 disabled:border-orange-500 disabled:bg-gray-600 py-2.5 font-bold text-white transition hover:bg-orange-600">
            
            {inCart ? "Added" :  "Add to Cart" }
           
        </button>
    );
};

export default CartBtns;