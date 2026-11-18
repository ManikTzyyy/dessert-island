const Chip = () => {
  return <div className="flex overflow-x-scroll overflow-y-hidden px-2 gap-2">
    <button className="bg-white px-4 py-1 rounded-full hover:bg-stone-200 shadow-sm">All</button>
    <button className="bg-white px-4 py-1 rounded-full hover:bg-stone-200 shadow-sm">Snack</button>
    <button className="bg-white px-4 py-1 rounded-full hover:bg-stone-200 shadow-sm">Drink</button>
    <button className="bg-white px-4 py-1 rounded-full hover:bg-stone-200 shadow-sm">Cheaper</button>
    <button className="bg-white px-4 py-1 rounded-full hover:bg-stone-200 shadow-sm">Main</button>
  
   
   
  </div>;
};

export { Chip };
