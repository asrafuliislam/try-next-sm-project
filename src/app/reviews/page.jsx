"use client"
import React, { useEffect, useState } from 'react';
import ReviewsCard from '../../component/cards/ReviewsCard';
import ReviewLoading from './ReviewLoading';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data.reviews || []);
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <ReviewLoading></ReviewLoading>
    }
    return (

        <div>
            <h2 className='text-4xl font-bold'> Total <span className='text-orange-400'>{reviews.length}</span> found reviews</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
                {reviews.map((review) => (
                    <ReviewsCard key={review.id} review={review} />
                ))}
            </div>
        </div>

    );
};

export default ReviewsPage;