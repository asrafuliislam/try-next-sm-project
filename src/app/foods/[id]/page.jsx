// import Image from "next/image";

import Image from "next/image";

const getSingleFoods = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();

  return data.details;
};

export function generateStaticParams() {
  return [{ id: "52898" }, { id: "52955" }, { id: "52326" }]
}



export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const { details = {} } = await res.json();
  return {
    title: details.title,
  }

}
const Page = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFoods(id);

  if (!food) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Food Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 rounded-2xl border-gray-400 border-1 shadow-gray-500 p-6 shadow-lg md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[350px] overflow-hidden rounded-xl md:h-[500px]">
          <Image
            src={food.foodImg}
            alt={food.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div className="space-y-5">
            <div>
              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                {food.category}
              </span>

              <h1 className="mt-4 text-4xl font-bold text-gray-800">
                {food.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-xl border px-5 py-3">
                <p className="text-sm text-gray-500">Cuisine</p>
                <h3 className="font-semibold text-gray-800">
                  {food.area}
                </h3>
              </div>

              <div className="rounded-xl border px-5 py-3">
                <p className="text-sm text-gray-500">Category</p>
                <h3 className="font-semibold text-gray-800">
                  {food.category}
                </h3>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-orange-500">
              ${food.price}
            </h2>

            <p className="leading-8 text-gray-600">
              Enjoy this delicious <strong>{food.title}</strong>. Prepared
              with premium ingredients, this meal is perfect for anyone who
              loves fresh and flavorful food. Order now and enjoy an amazing
              dining experience with your family and friends.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600">
              Add to Cart
            </button>

            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-orange-500 px-8 py-3 text-center font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
            >
              Watch Recipe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;