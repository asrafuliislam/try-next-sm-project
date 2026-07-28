import React from 'react';
import FeedbackCard from '../../component/cards/FeedbackCard';
import Link from "next/link";

export const metadata = {
    title: "Feedback"
}
export const dynamic = "force-dynamic";

const GetFeedback = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {

        next: { revalidate: 60 }
    });

    return await res.json();
}

const FeedBackPage = async () => {
    const feedbacks = await GetFeedback()

    return (
        <div className=''>
            <h2 className='font-bold text-2xl '>
                Feedback {feedbacks.length}
            </h2>

            <div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {feedbacks.map((feedback) => (
                        <FeedbackCard
                            key={feedback._id}
                            feedback={feedback}
                        />
                    ))}
                </div>
            </div>
            <div className='justify-between items-center my-5'>
                <Link href={"/feedback/add"} className='btn'> Add Feedback</Link>
            </div>
        </div>
    );
};

export default FeedBackPage;