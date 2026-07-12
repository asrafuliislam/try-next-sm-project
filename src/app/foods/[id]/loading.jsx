const Loading = () => {
    return (
        <div className="mx-auto max-w-7xl animate-pulse px-4 py-10">
            <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2">
                {/* Image Skeleton */}
                <div className="h-[350px] rounded-xl bg-gray-200 md:h-[500px]" />

                {/* Content Skeleton */}
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        {/* Category */}
                        <div className="h-8 w-28 rounded-full bg-gray-200" />

                        {/* Title */}
                        <div className="space-y-3">
                            <div className="h-10 w-3/4 rounded bg-gray-200" />
                            <div className="h-10 w-1/2 rounded bg-gray-200" />
                        </div>

                        {/* Info Cards */}
                        <div className="flex gap-4">
                            <div className="h-20 w-36 rounded-xl bg-gray-200" />
                            <div className="h-20 w-36 rounded-xl bg-gray-200" />
                        </div>

                        {/* Price */}
                        <div className="h-10 w-32 rounded bg-gray-200" />

                        {/* Description */}
                        <div className="space-y-3">
                            <div className="h-4 w-full rounded bg-gray-200" />
                            <div className="h-4 w-full rounded bg-gray-200" />
                            <div className="h-4 w-5/6 rounded bg-gray-200" />
                            <div className="h-4 w-4/6 rounded bg-gray-200" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <div className="h-12 flex-1 rounded-lg bg-gray-200" />
                        <div className="h-12 flex-1 rounded-lg bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loading;