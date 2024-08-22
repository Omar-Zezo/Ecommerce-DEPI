import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsByCategory } from "../redux/actions/productsActions";
import ProductCard from "../components/Products/ProductCard";
import Filter from "../components/Products/Filter";
import { FilterImg } from "../images/svg";

const Category = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const productsData = useSelector((state) => state.productsReducer.productsByCategory);
  const dispatch = useDispatch();

  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      dispatch(getAllProductsByCategory(slug, `limit=30`));
    }
  }, [slug]);

  useEffect(() => {
    if (productsData) {
      setAllProducts(productsData.products);
    }
  }, [productsData]);


  return (
    <div className="flex justify-between w-[95%] py-10 mx-auto">
      <Filter allProducts={allProducts} setAllProducts={setAllProducts} productsData={productsData} showFilter={showFilter} setShowFilter={setShowFilter}/>
      <div className="xl:w-[78%] h-fit flex flex-col gap-12">
      <h1 className="w-fit mx-auto text-3xl text-center capitalize font-semibold py-3 relative after:title-line">{slug} category</h1>
      <div className="xl:hidden flex items-center gap-2 pl-5" onClick={()=>setShowFilter(true)}>
        <img width={30} src={FilterImg} alt="filter"/>
        <p className="text-xl font-semibold text-zinc-800">Filter</p>
      </div>
      <div className="flex justify-center gap-5 flex-wrap">
        {
          allProducts ? (
            allProducts.map((product) => (
              <ProductCard key={product.title} cardSize="w-[280px]" product={product} />
            ))
          ):null
        }
      </div>
      </div>
    </div>
  );
};

export default Category;
