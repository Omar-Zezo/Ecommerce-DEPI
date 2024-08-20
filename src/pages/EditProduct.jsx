import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditProduct = () => {
  const [productTitle, setProductTitle] = useState("");

  const { id } = useParams();

  const editProduct = async (e) => {
    e.preventDefault();
    if (id) {
      await fetch("https://dummyjson.com/products/1", {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: productTitle,
        }),
      })
        .then((res) => res.json())
        .then(console.log);
    }
  };

  return (
    <div className="min-h-screen w-[95%] flex justify-between py-10 mx-auto">
      <aside className="w-[25%] p-10 min-h-screen flex flex-col gap-5 bg-sky-950 rounded-lg">
        <Link
          to="/admin"
          className="w-full p-3 bg-white text-lg text-sky-950 font-semibold text-center rounded-lg"
        >
          Manage All Products
        </Link>
        <Link
          to="/admin/add-product"
          className="w-full p-3 bg-white text-lg text-sky-950 font-semibold text-center rounded-lg"
        >
          Add New Product
        </Link>
      </aside>
      <div className="w-[73%] min-h-screen bg-sky-950 flex flex-col gap-5 rounded-lg p-5">
        <h2 className="w-full text-3xl uppercase text-white font-semibold text-center">
          Edit Product
        </h2>
        <form className="flex flex-col gap-5 mt-10" onSubmit={editProduct}>
          <input
            type="text"
            className="p-3 bg-sky-900 rounded-lg outline-none text-base text-white"
            placeholder="Enter Product title"
            value={productTitle}
            onChange={(e) => setProductTitle(e.target.value)}
          />
          <input
            type="submit"
            value={"Edit Product"}
            className="p-3 bg-green-700 rounded-lg text-center text-base font-semibold cursor-pointer text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
