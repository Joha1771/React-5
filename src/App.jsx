import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Card from "./components/Card/cards";
import Pagination from "./components/Pagination/pagination";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://dummyjson.com/products", {
          params: {
            limit: 6,
            skip: (page - 1) * 6,
          },
        });

        setProducts(res.data.products);
        setTotalPages(Math.ceil(res.data.total / 6));
      } catch (err) {
        console.error("Ошибка загрузки:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  function nextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Наушники секция */}
      <section className="py-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="mb-6 text-xl font-semibold text-gray-700">Наушники</h2>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
          )}

          {/* Сетка карточек - 3 в ряд */}
          <div className="grid grid-cols-3 gap-6 mb-10">
            {products.map((product) => (
              <Card product={product} key={product.id} />
            ))}
          </div>

          {/* Пагинация */}
          <div className="flex flex-col items-center gap-4 pb-10">
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              nextPage={nextPage}
              prevPage={prevPage}
              setPage={setPage}
            />

            <div className="text-sm font-medium text-gray-600">
              Страница{" "}
              <span className="px-2 py-1 font-bold text-blue-600 bg-blue-100 rounded">
                {page}
              </span>{" "}
              из{" "}
              <span className="px-2 py-1 font-bold text-gray-800 bg-gray-200 rounded">
                {totalPages}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
