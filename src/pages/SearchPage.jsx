import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import SortPosts from "../utils/SortPosts";
import { getProductsSearch } from "../redux/actions/productsActions";
import ProductCard from "../components/Products/ProductCard";


const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [sorting, setSorting] = useState(["id", "asc"]);

  const searchProductsData = useSelector(
    (state) => state.productsReducer.searchProducts
  );
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();


  const sortBy = searchParams.get("sortBy");
  const order = searchParams.get("order");
  const value = searchParams.get("value");


  useEffect(() => {
    if (value !== null) {
      dispatch(
        getProductsSearch(
          `q=${value}&sortBy=${sortBy ? sortBy : "id"}&order=${order ? order : "asc"}`
        )
      );
    }
  }, [order, sortBy, value]);

  useEffect(() => {
    if (searchProductsData) {
      if (searchProductsData.products) {
        setProducts(searchProductsData.products);
      }
    }
  }, [searchProductsData]);



  return (
    <div className="min-h-screen w-[95%] px-5 py-10 mx-auto">
      {/* <SortPosts
        sortBy={sortBy}
        order={order}
        totalPosts={totalPosts}
        page={page}
        setSorting={setSorting}
        searchValue={value}
      /> */}
      <h1 className="lg:text-3xl text-xl font-bold capitalize mb-10 shadow-blue-400 shadow-sm border-2 border-blue-400 text-zinc-900 dark:text-white w-fit mx-auto p-3 dark:bg-zinc-900 bg-slate-200 rounded-md">
        Search Results related to : {value}
      </h1>
      <div className="flex justify-center gap-5 flex-wrap">
        {products.map((product) => (
          <ProductCard cardSize="w-[280px]" product={product} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
