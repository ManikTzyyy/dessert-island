import { Button } from "./Button";

const ProductCard = ({
  name = "",
  img = "",
  price = 0,
  desc = "",
  categories = [],
}) => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="w-full h-32  shrink-0 relative overflow-hidden">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-between px-1 py-2">
        <div className="flex gap-2 text-stone-400">
          {categories.map((e) => (
            <span className="border rounded-full px-2 text-sm" key={e}>
              {e}
            </span>
          ))}
        </div>
        <span className="text-xl md:text-3xl font-bold text-stone-700">
          Rp {price}
        </span>

        <div className="flex flex-col pb-1">
          <span className="text-lg md:text-xl text-orange-500 font-black">
            {name}
          </span>
          <span className="text-xs text-stone-400">{desc}</span>
        </div>

        <Button />
      </div>
    </div>
  );
};

const CardLoading = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="w-full h-32  shrink-0 relative bg-stone-200 skeleton "></div>
      <div className="flex flex-col justify-between px-1 py-2 gap-2">
        <div className="flex gap-2">
          <span className="bg-stone-200 px-2 text-sm w-20 h-5 skeleton"></span>
        </div>
        <span className="bg-stone-200 px-2 text-sm w-32 h-5 rounded-xs skeleton"></span>
        <div className="flex flex-col pb-1">
          <span className="bg-stone-200 px-2 text-sm w-24 h-5 rounded-xs skeleton"></span>
        </div>
        <span className="bg-stone-200 px-2 text-sm w-full h-6 rounded-full skeleton"></span>
      </div>
    </div>
  );
};

export { ProductCard, CardLoading };
