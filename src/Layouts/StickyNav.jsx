import { useState, useEffect } from "react";
import { Search } from "../components/Search";
import { Chip } from "../components/Chip";
const SearchFilter = ({ search, onSearch, activeCategory, onChangeCat }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 space-y-2 py-2 ${
        isSticky ? "bg-white " : "bg-transparent"
      }`}
    >
      <Search isScrolled={isSticky} search={search} onSearch={onSearch} />
      <Chip
        isScrolled={isSticky}
        activeCategory={activeCategory}
        onChange={onChangeCat}
      />
    </div>
  );
};

export { SearchFilter };
