import { SHOP_ITEMS } from "@/public/shoplist";
import SearchBar from "../components/SearchBar";

type ShopItem = {
  name: string;
  price: string;
  desc: string;
  path: string;
};

export default function Shop() {
  return (
    <>
      <SearchBar />
      <div className="grid grid-cols-3 gap-8">
        {SHOP_ITEMS.map((item, id) => (
          <div
            key={id}
            className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
          >
            <div>
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                <img
                  src={item.path}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {item.name}
                </p>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  {`$` + item.price}
                </p>
              </div>
              <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                {item.desc}
              </p>
            </div>
            <div className="p-4 pt-0">
              <button
                className="align-middle bg-slate-800 rounded-full p-3 text-white"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
