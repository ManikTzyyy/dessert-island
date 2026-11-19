const Banner = () => {
  return (
    <div className="h-40 bg-white relative overflow-hidden flex flex-col ">
      <img
        src="/bg.png"
        alt=""
        className=" h-full w-full absolute top-0 opacity-10 object-cover"
      />
      <div className="z-50 relative flex justify-center items-center h-full text-5xl md:text-7xl font-bold italic text-orange-400">
        Dear Dessert
      </div>
      <div className="flex justify-between px-2 text-sm text-stone-700">
        <p>+62 813-3970-2828</p>
        <p>JL. Setiabudi no.128, Penarukan</p>
      </div>
    </div>
  );
};

export { Banner };
