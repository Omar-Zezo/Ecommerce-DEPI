import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCardAdmin from "../components/Products/ProductCardAdmin";
import { getAuthUser } from "../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../redux/actions/productsActions";
import Sidebar from "../components/Admin/sidebar";
import { toast } from "react-toastify";
import Notify from "../utils/Notify";
import Pagination from "../utils/Pagination";

const Admin = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const deleteProductData = useSelector(
    (state) => state.productsReducer.delete
  );
  const authUserData = useSelector((state) => state.authReducer.getAuth);
  const allProductsData = useSelector(
    (state) => state.productsReducer.products
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const total = searchParams.get("total");
  const limit = 12;

  //get auth user
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser(token));
    } else {
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (authUserData) {
      if (authUserData.data) {
        if (authUserData.data.role !== "admin") {
          navigate("/");
        }
      }
    }
  }, [authUserData]);

  //get Products
  useEffect(() => {
    dispatch(
      getAllProducts(
        `limit=${limit}&skip=${page ? ((+page - 1) * limit) % +total : 0}`
      )
    );
  }, []);

  //handel pagination
  const getLimit = async (newOffset, selected) => {
    dispatch(getAllProducts(`limit=${limit}&skip=${newOffset}`));
    navigate(`?page=${selected + 1}&total=${totalProducts}`);
  };

  useEffect(() => {
    if (allProductsData) {
      setAllProducts(allProductsData.products);
      setTotalProducts(allProductsData.total);
    }
  }, [allProductsData]);

  //handel delete product
  const handelDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    if (deleteProductData) {
      if (deleteProductData.id) {
        successMsg();
      }
    }
  }, [deleteProductData]);

  const successMsg = () => toast.success("Product Deleted Successfully");

  return (
    <div className="min-h-screen w-[95%] flex justify-between py-10 mx-auto">
      <Sidebar />
      <div className="w-[73%] min-h-screen bg-sky-950 flex flex-col gap-5 rounded-lg p-5">
        <h2 className="w-full text-3xl uppercase text-white font-semibold text-center">
          Manage All Products
        </h2>
        <div className="flex gap-5 mt-10 flex-wrap">
          {allProducts
            ? allProducts.map((product) => (
                <ProductCardAdmin
                  key={product.title}
                  cardSize={"w-[280px]"}
                  product={product}
                  deleteProduct={handelDeleteProduct}
                />
              ))
            : null}
        </div>
        <Pagination
          totalPosts={totalProducts}
          getLimit={getLimit}
          pageNumber={+page}
        />
      </div>
      <Notify />
    </div>
  );
};

export default Admin;
