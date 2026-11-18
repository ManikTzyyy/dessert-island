import { ProductCard } from "./components/ProductCard";
import { FloatingButton } from "./components/Button";
import { Banner } from "./components/Banner";
import { Chip } from "./components/Chip";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="space-y-2 bg-stone-100">
      <Banner />
      <Search />
      <Chip />
      <div className=" min-h-screen px-2 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="fixed bottom-2 z-50 right-2">
          <FloatingButton />
        </div>
      </div>
    </div>
  );
}

export default App;
