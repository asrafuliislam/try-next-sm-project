"use client";

import React, { useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";

const ReviewsCard = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(review.likes || 0);

  const handleLike = () => {
    if (liked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="bg-gray-900 rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={
            review.photo ||
            "https://i.ibb.co/4pDNDk1/avatar.png"
          }
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover border"
        />

        <div className="flex-1">
          <h2 className="font-bold text-lg">{review.name}</h2>
          <p className="text-sm text-gray-500">
            {review.date || "Recently"}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4 text-yellow-500">
        {[...Array(review.rating || 5)].map((_, index) => (
          <FaStar key={index} />
        ))}

        <span className="ml-2 text-gray-600 font-medium">
          {review.rating || 5}/5
        </span>
      </div>

      {/* Review */}
      <p className="text-gray-600 mt-4 leading-7">
        {review.review}
      </p>

      {/* Like Button */}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition duration-300 ${
            liked
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-800 font-bold hover:bg-red-100"
          }`}
        >
          <FaHeart />
          {liked ? "Liked" : "Like"}
        </button>

        <span className="font-semibold text-gray-700">
          ❤️ {likes} Likes
        </span>
      </div>
    </div>
  );
};

export default ReviewsCard;