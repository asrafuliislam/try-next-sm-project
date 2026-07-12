import React from "react";

const ReviewsCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 animate-pulse">
      {/* User Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <div className="w-14 h-14 rounded-full bg-gray-300"></div>

          <div>
            {/* Name */}
            <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>

            {/* Date */}
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Rating */}
        <div className="h-8 w-16 rounded-full bg-orange-100"></div>
      </div>

      {/* Review */}
      <div className="mt-5 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-11/12"></div>
        <div className="h-4 bg-gray-200 rounded w-10/12"></div>
        <div className="h-4 bg-gray-200 rounded w-8/12"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6 pt-4 border-t">
        <div className="h-5 w-20 bg-gray-200 rounded"></div>

        <div className="h-10 w-28 bg-orange-100 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ReviewsCardSkeleton;