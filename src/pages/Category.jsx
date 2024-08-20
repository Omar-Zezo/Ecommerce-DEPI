import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsByCategory } from "../redux/actions/productsActions";
import ProductCard from "../components/Products/ProductCard";

const Category = () => {
  const [allProducts, setAllProducts] = useState([]);
  const productsData = useSelector(
    (state) => state.productsReducer.productsByCategory
  );
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
    <div className="min-h-screen w-[95%] px-5 py-10 mx-auto">
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
  );
};

export default Category;
