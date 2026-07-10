const FoodCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="h-56 w-full bg-gray-300"></div>

      <div className="space-y-4 p-5">
        <div className="flex justify-between">
          <div className="h-6 w-36 rounded bg-gray-300"></div>
          <div className="h-6 w-20 rounded-full bg-gray-300"></div>
        </div>

        <div className="h-7 w-24 rounded bg-gray-300"></div>

        <div className="flex gap-3 pt-2">
          <div className="h-11 flex-1 rounded-lg bg-gray-300"></div>
          <div className="h-11 flex-1 rounded-lg bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;