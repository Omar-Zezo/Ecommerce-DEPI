import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUser } from "../redux/actions/authActions";
import { addProduct } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Admin/sidebar";
import { toast } from 'react-toastify';
import Notify from '../utils/Notify'

const AddProduct = () => {
  const [productTitle, setProductTitle] = useState("");

  const authUserData = useSelector((state) => state.authReducer.getAuth);
  const addProductData = useSelector((state) => state.productsReducer.addProduct);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const successMsg = () => toast.success("Product Add Successfully");
  const errorMsg = () => toast.error("Product title mustn't be empty");


  useEffect(()=>{
    if(addProductData){
      console.log(addProductData)
      if(addProductData.id){
        successMsg()
      }
    }
  },[addProductData])


  const onSubmit = (e)=>{
    e.preventDefault()
    if(productTitle !== ""){
      dispatch(addProduct(JSON.stringify({
        title: productTitle,
      })))
    }else{
      errorMsg()
    }
  }


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

  return (
    <div className="min-h-screen w-[95%] flex justify-between py-10 mx-auto">
      <Sidebar/>
      <div className="w-[73%] min-h-screen bg-sky-950 flex flex-col gap-5 rounded-lg p-5">
        <h2 className="w-full text-3xl uppercase text-white font-semibold text-center">
          Add New Product
        </h2>
        <form className="flex flex-col gap-5 mt-10" onSubmit={onSubmit}>
          <input
            type="text"
            className="p-3 bg-sky-900 rounded-lg outline-none text-base text-white"
            placeholder="Enter Product title"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <input
            type="submit"
            value={"Add Product"}
            className="p-3 bg-green-700 rounded-lg text-center text-base font-semibold cursor-pointer text-white"
          />
        </form>
      </div>
      <Notify/>
    </div>
  );
};

export default AddProduct;
