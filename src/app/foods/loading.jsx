import React from 'react';
import FoodCardSkeleton from '../../component/skeletons/FoodCardSkeleton';

const loading = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                [...Array(12)].map((_, index)=> (
                    <FoodCardSkeleton key={index}></FoodCardSkeleton>
                ))
            }
        </div>
        // <div>
        //     loading...
        // </div>
    );
};

export default loading;