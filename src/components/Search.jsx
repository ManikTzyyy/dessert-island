const Search = ({ isScrolled, onSearch, search }) => {
  return (
    <div className="px-2">
      <input
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        name="search"
        id="search"
        className={`bg-white  w-full px-4 py-2 rounded-full focus:outline-none
                ${isScrolled && "border border-stone-400 transition-all duration-300"} 
                `}
        placeholder="Search your favorite dessert here!"
      />
    </div>
  );
};

export { Search };
