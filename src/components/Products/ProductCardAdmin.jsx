import { Link } from "react-router-dom";

const ProductCardAdmin = ({ product, cardSize, deleteProduct}) => {
  
  return (
    <div className={`${cardSize} h-[500px] relative flex-grow shadow-lg bg-white rounded-md`}>
    <Link to={`product/${product.id}`}>
      <div className="w-full h-[85%]">
        <img
          src={product.thumbnail}
          alt={"product-1"}
          loading="lazy"
          className="size-full object-contain object-center"
        />
      </div>
    </Link>
    <div
      className="w-full h-[50px] py-3 bg-sky-950 flex items-center justify-center text-white absolute left-0 top-[75%] cursor-pointer gap-5"
    >
      <Link to={`/admin/edit-product/${product.id}`} className="w-1/2 py-2 flex items-center justify-center bg-green-700 text-white rounded-lg text-lg font-medium">Edit</Link>
      <button className="w-1/2 py-2 flex items-center justify-center bg-red-600 text-white rounded-lg text-lg font-medium"
      onClick={()=>deleteProduct(product.id)}
      >
      Delete
      </button>
    </div>
    <div className="flex flex-col items-center mt-3">
      <h3 className="text-lg font-medium text-zinc-800 w-full text-center px-1 overflow-hidden text-ellipsis text-nowrap uppercase" title={product.title}>{product.title}</h3>
      <div className="flex w-[80%] mx-auto justify-center">
        <p className="text-base font-medium line-through text-red-600">${Math.ceil(product.price + 50)}</p>
        <p className="text-base font-medium text-zinc-800 ml-4">${Math.ceil(product.price)}</p>
      </div>
    </div>
  </div>
  )
}

export default ProductCardAdmin