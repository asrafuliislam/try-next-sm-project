"use client";

import { formatDistanceToNow } from "date-fns";
import { FaEdit, FaTrash } from "react-icons/fa";

const FeedbackCard = ({ feedback, onDelete, onUpdate }) => {
  return (
    <div className="border rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-700">{feedback.message}</p>

          <p className="text-sm text-gray-500 mt-3">
            {formatDistanceToNow(new Date(feedback.data), {
              addSuffix: true,
            })}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onUpdate(feedback)}
            className="btn btn-sm btn-warning text-white"
          >
            <FaEdit />
            Update
          </button>

          <button
            onClick={() => onDelete(feedback._id)}
            className="btn btn-sm btn-error text-white"
          >
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;