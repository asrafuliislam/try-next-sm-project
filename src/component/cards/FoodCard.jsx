import Image from "next/image";
import Link from "next/link";
import CartBtns from "../buttons/CartBtns";

const FoodCard = ({ food }) => {
  const { id, title, category, price, foodImg } = food;

  return (
    <div className="overflow-hidden rounded-xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={foodImg}
          alt={title}
          fill
          className="objext-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-gray-500">{title}</h2>

          <div className="mt-2 flex items-center justify-between">
            <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
              {category}
            </span>

            <span className="text-lg font-bold text-orange-500">
              ${price}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <CartBtns></CartBtns>

          <Link
            href={`/foods/${id}`}
            className="w-full rounded-lg border border-orange-500 py-2.5 text-center font-medium text-orange-500 transition hover:bg-orange-500 hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;