import React from 'react';
import FeedbackCard from '../../component/cards/FeedbackCard';

export const metadata = {
    title: "Feedback"
}

const GetFeedback = async() => {
    const res = await fetch("localhost:3000/api/feedback/");
    return await res.json();
}

const FeedBackPage = async () => {

    const feedbacks = await GetFeedback()

    return (
        <div className=''>
            <h2 className='font-bold text-2xl '>
                Feedback
            </h2>
            <div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {feedbacks.map((feedback) => (
                        <FeedbackCard
                            key={feedback._id}
                            feedback={feedback}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeedBackPage;