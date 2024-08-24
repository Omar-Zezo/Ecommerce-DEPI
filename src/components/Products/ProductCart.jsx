import React, { useState } from "react";

const ProductCart = ({ product }) => {
    const [producrQuantity, setProducrQuantity] = useState(product.quantity)
  return (
    <div className="pl-5 pr-14 py-10 bg-white flex max-xl:flex-col gap-8 shadow-lg rounded-lg">
      <img width={150} src={product.thumbnail} alt={product.title} />
      <ul className="flex flex-col gap-5">
        <li>
          <h2 className="text-sky-950 text-xl font-semibold">
            {product.title}
          </h2>
        </li>
        <li className="flex gap-2">
          <p className="text-sky-950 text-xl font-semibold">Product ID:</p>
          <p className="text-sky-950 text-xl font-semibold">{product.id}</p>
        </li>
        <li className="flex gap-2">
          <p className="text-sky-950 text-xl font-semibold">Price:</p>
          <p className="text-sky-950 text-xl font-semibold">
            ${Math.ceil(product.price)}
          </p>
        </li>
        <li className="flex gap-2">
          <p className="text-sky-950 text-xl font-semibold">Total Price:</p>
          <p className="text-sky-950 text-xl font-semibold">
            ${Math.ceil(product.price) * producrQuantity}
          </p>
        </li>
      </ul>
      <div className="flex h-fit xl:my-auto xl:ml-auto mx-auto">
        <span className="bg-slate-50 size-10 flex justify-center items-center text-2xl cursor-pointer"
        onClick={()=> {
            if(producrQuantity > 1){
                setProducrQuantity(producrQuantity - 1)
            }
        }}
        >
          -
        </span>
        <input
          className="w-[50px] h-[50px] text-center outline-none"
          type="number"
          value={producrQuantity}
          onChange={(e)=> setProducrQuantity(e.target.value)}
        />
        <span className="bg-slate-50 size-10 flex justify-center items-center text-2xl cursor-pointer"
        onClick={()=> setProducrQuantity(producrQuantity + 1)}
        >
          +
        </span>
      </div>
    </div>
  );
};

export default ProductCart;
