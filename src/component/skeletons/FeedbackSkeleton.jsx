const FeedbackSkeleton = () => {
  return (
    <div className="border rounded-xl p-5 shadow animate-pulse">
      <div className="h-5 w-3/4 bg-gray-300 rounded"></div>

      <div className="h-4 w-24 bg-gray-200 rounded mt-4"></div>

      <div className="flex gap-2 mt-5">
        <div className="h-9 w-24 rounded bg-gray-300"></div>
        <div className="h-9 w-24 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default FeedbackSkeleton;