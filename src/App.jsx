import { ProductCard, CardLoading } from "./components/ProductCard";
import { FloatingButton } from "./components/Button";
import { Banner } from "./components/Banner";
import { Chip } from "./components/Chip";
import { Search } from "./components/Search";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SearchFilter } from "./Layouts/StickyNav";

function App() {
  const API_URL = import.meta.env.VITE_BE_URL;

  const [products, setProducts] = useState([]);
  const [loadingProduct, setLoadingProduct] = useState(true);

  const fetchProduct = async () => {
    try {
      setLoadingProduct(true);

      const res = await fetch(
        `${API_URL}/blenk/products?page=1&limit=10&search=&category=`,
      );

      if (!res.ok) {
        throw new Error(`Fetch gagal (${res.status})`);
      }

      const data = await res.json();
      setProducts(data.data ?? []);
    } catch (error) {
      toast.error(error.message || "Terjadi kesalahan");
    } finally {
      setLoadingProduct(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="space-y-2 bg-stone-100">
      <Banner />
      <SearchFilter />
      <div className="min-h-screen px-2 relative ">
        {loadingProduct ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </div>
        ) : products.length == 0 ? (
          <div className=" flex justify-center items-center py-28">
            No product yet
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {products.map((e) => (
              <ProductCard
                key={e.id}
                img={e.image}
                name={e.name}
                categories={e.category}
                price={e.price}
                desc={e.desc}
              />
            ))}
          </div>
        )}

        <div className="fixed bottom-2 z-50 right-2">
          <FloatingButton />
        </div>
      </div>
    </div>
  );
}

export default App;
