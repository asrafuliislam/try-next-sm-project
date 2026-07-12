import React from 'react';
import ReviewsCardSkeleton from '../../component/skeletons/ReviewsCardSkeleton';

const ReviewLoading = () => {
    return (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                [...Array(12)].map((_, index) => (
                    <ReviewsCardSkeleton key={index}></ReviewsCardSkeleton>
                ))
            }
        </div>
    );
};

export default ReviewLoading;