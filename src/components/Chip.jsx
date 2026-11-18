const Chip = ({ isScrolled }) => {
  return (
    <div className="flex overflow-x-scroll overflow-y-hidden px-2 gap-2">
      <button
        className={`bg-white px-4 py-1 rounded-full hover:bg-stone-200 ${isScrolled && "border border-stone-300"}`}
      >
        All
      </button>
    </div>
  );
};

export { Chip };
