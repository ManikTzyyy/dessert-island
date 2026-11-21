import { ProductCard, CardLoading } from "./components/ProductCard";
import { FloatingButton } from "./components/Button";
import { Banner } from "./components/Banner";

import { useEffect, useState, useRef } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { toast } from "sonner";
import { SearchFilter } from "./Layouts/StickyNav";

import { numberFormat } from "./utils/numberFormat";

function App() {
  const API_URL = import.meta.env.VITE_BE_URL;

  const [products, setProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const isFetchingRef = useRef(false);

  const [category, setCategory] = useState("");

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  const fetchProduct = async (pageNumber = 1) => {
    if (isFetchingRef.current) return;

    isFetchingRef.current = true;
    try {
      if (pageNumber === 1) {
        setLoadingProduct(true);
      } else {
        setLoadingMore(true);
      }

      const params = new URLSearchParams({
        page: String(pageNumber),
        limit: "10",
        search: debouncedSearch,
        category: category,
      });

      const res = await fetch(`${API_URL}/blenk/products?${params}`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`Fetch gagal (${res.status})`);
      }

      const data = await res.json();

      const newProducts = data.data ?? [];

      setProducts((prev) =>
        pageNumber === 1 ? newProducts : [...prev, ...newProducts],
      );
      setHasMore(data.meta?.has_next ?? false);
      setPage((data.meta?.current_page ?? pageNumber) + 1);
    } catch (error) {
      toast.error(error.message || "Terjadi kesalahan");
    } finally {
      isFetchingRef.current = false;
      setLoadingProduct(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    const target = observerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !isFetchingRef.current) {
          fetchProduct(page);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [page, hasMore]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    fetchProduct(1);
  }, [debouncedSearch, category]);

  return (
    <div className="space-y-2 bg-stone-100">
      <Banner />
      <SearchFilter
        search={search}
        onSearch={setSearch}
        activeCategory={category}
        onChangeCat={setCategory}
      />
      <div className="min-h-screen px-2 relative ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {loadingProduct && products.length === 0 ? (
            Array.from({ length: 8 }).map((_, i) => {
              return <CardLoading key={i} />;
            })
          ) : products.length == 0 ? (
            <div className=" flex justify-center items-center py-28 col-span-2">
              No product yet
            </div>
          ) : (
            products.map((e) => (
              <div key={e.id}>
                <ProductCard
                  img={e.image}
                  name={e.name}
                  categories={e.category}
                  price={numberFormat(e.price)}
                  desc={e.description}
                />
              </div>
            ))
          )}
          {loadingMore &&
            Array.from({ length: 6 }).map((_, i) => (
              <CardLoading key={`loading-more-${i}`} />
            ))}
          {hasMore && (
            <div
              ref={observerRef}
              className="col-span-2 md:col-span-4 h-10"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="fixed bottom-2 z-50 right-2">
          <FloatingButton />
        </div>
      </div>
    </div>
  );
}

export default App;
