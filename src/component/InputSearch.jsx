"use client"
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const InputSearch = () => {
    const router = useRouter();
    const params = useSearchParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.search.value;

        const newParams = new URLSearchParams(params.toString());
        newParams.set("search", value);
        router.push(`foods?${newParams.toString()}`)
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit} className="flex w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-200">
                <input
                    name="search"
                    type="text"
                    placeholder="Search your favorite food..."
                    className="flex-1 px-5 py-4 text-gray-700 outline-none text-lg placeholder:text-gray-400"
                />

                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 transition-all duration-300 cursor-pointer"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default InputSearch;