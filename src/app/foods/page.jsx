import React from 'react';
import FoodCard from '../../component/cards/FoodCard';


const getFoods = async () => {
    const res = await fetch(
        "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
    );
    const data = await res.json();
    return data.foods || [];
};



const Foodpage = async () => {

    const foods = await getFoods();

    return (
        <div>
            <h2 className='text-4xl font-bold'> Total <span className='text-orange-400'>{foods.length}</span> found foods</h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {foods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                ))}
            </div>

        </div>
    );
};

export default Foodpage;