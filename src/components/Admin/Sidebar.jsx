import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {

    const navigate = useNavigate()

    const logoutAdmin = ()=>{
        localStorage.removeItem("token")
        navigate('/')
    }

  return (
    <aside className="w-[25%] p-10 min-h-screen bg-sky-950 rounded-lg">
      <ul className="flex flex-col gap-5">
        <li className="w-full p-3 bg-white text-lg text-sky-950 font-semibold text-center rounded-lg">
          <Link to="/admin">Manage All Products</Link>
        </li>
        <li className="w-full p-3 bg-white text-lg text-sky-950 font-semibold text-center rounded-lg">
          <Link to="/admin/add-product">Add New Product</Link>
        </li>
        <li className="w-full p-3 bg-white text-lg cursor-pointer text-red-600 font-semibold text-center rounded-lg"
        onClick={logoutAdmin}
        >
        Logout
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
