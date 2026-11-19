import { useState, useEffect } from "react";
import { toast } from "sonner";

const Chip = ({ isScrolled, onChange, activeCategory }) => {
  const [chip, setChip] = useState([]);
  const [isLoadingChip, setIsLoadingChip] = useState(false);

  const API_URL = import.meta.env.VITE_BE_URL;
  const fetchData = async () => {
    try {
      setIsLoadingChip(true);

      const res = await fetch(`${API_URL}/be/f-b`);
      if (!res.ok) {
        throw new Error("Failed to load category");
      }

      const data = await res.json();

      const dataClean = data.map((e) => ({
        id: e.id,
        name: e.name,
        value: e.name,
      }));

      const finalData = [{ id: 0, name: "all", value: "" }, ...dataClean];
      setChip(finalData);
    } catch (error) {
      toast.error(error.message || "Something is wrong");
    } finally {
      setIsLoadingChip(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex overflow-x-scroll overflow-y-hidden px-2 gap-2">
      {isLoadingChip ? (
        <div className="flex gap-2">
          <div className="skeleton w-20 bg-stone-300 h-10"></div>
          <div className="skeleton w-20 bg-stone-300 h-10"></div>
          <div className="skeleton w-20 bg-stone-300 h-10"></div>
          <div className="skeleton w-20 bg-stone-300 h-10"></div>
          <div className="skeleton w-20 bg-stone-300 h-10"></div>
          <div className="skeleton w-20 bg-stone-300 h-10"></div>
        </div>
      ) : (
        <>
          {/* <button
            onClick={() => onChange("")}
            className={`bg-white px-4 py-1 rounded-full hover:bg-stone-200 ${isScrolled && "border border-stone-300"}`}
          >
            All
          </button> */}

          {chip.map((e) => {
            return (
              <button
                key={e.id}
                onClick={() => onChange(e.value)}
                className={` px-4 py-1 rounded-full hover:bg-stone-200 ${isScrolled && "border border-stone-300"}
                ${activeCategory == e.value ? "bg-stone-300" : "bg-white"}
                `}
              >
                {e.name}
              </button>
            );
          })}
        </>
      )}
    </div>
  );
};

export { Chip };
