import React from 'react';
import FoodCard from '../../component/cards/FoodCard';
import CartItems from './cartitems';
import InputSearch from '../../component/InputSearch';


const getFoods = async ({ search }) => {
    const res = await fetch(
        `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`
    );
    if (!res.ok) {
        throw new Error("Failed to fetch foods");
    }
    const data = await res.json();
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return data.foods || [];
};



const FoodPage = async ({ searchParams }) => {
    const { search = "" } = await searchParams;
    const foods = await getFoods({ search });

    return (
        <div>
            <h2 className='text-4xl font-bold'> Total <span className='text-orange-400'>{foods.length}</span> found foods</h2>
            <div className='my-5'><InputSearch></InputSearch></div>
            <div className='flex gap-5'>
                <div className="flex-1 my-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {foods.map((food) => (
                        <FoodCard key={food.id} food={food} />
                    ))}
                </div>
                <div className='w-[255px] border-2 rounded-2xl p-3  '>
                    <h2>Cart items</h2> <hr />
                    <CartItems></CartItems>
                </div>
            </div>

        </div>
    );
};

export default FoodPage;