import { Button } from "./Button";

const ProductCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="w-full h-32  shrink-0 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR__8ZbR-r3Xe6SNxPrFv66ye8zEmUVSOBoF7IE8RZ7Q&s=10"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between px-1 py-2">
        <div className="flex gap-2 text-stone-400">
          <span className="border rounded-full px-2 text-sm">Snack</span>
        </div>
        <span className="text-xl md:text-3xl font-bold text-stone-700">
          Rp 20.999
        </span>

        <div className="flex flex-col pb-1">
          <span className="text-lg md:text-xl text-orange-500 font-black">
            Terang bulan
          </span>
          <span className="text-xs text-stone-400">Lorem, ipsum dolor</span>
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
