import { useEffect, useState } from "react";
import ProductCart from "../components/Products/ProductCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const [userCart, setUserCart] = useState(null);
  const [orderPrice, setOrderPrice] = useState(0);
  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    setUserCart(cart);
  }, []);

  useEffect(() => {
    if (userCart) {
      userCart.map((item) => {
        setOrderPrice(orderPrice + item.price);
      });
    }
  }, [userCart]);

  //remove cart
  const removeCart = () => {
    localStorage.removeItem("cart");
    window.location.reload("/cart");
  };
  

  //Delete one item from cart
const handelDelete = (itemId)=>{
  const newArray = userCart.filter(pro=> pro.id !== itemId)
  localStorage.setItem("cart", JSON.stringify(newArray))
  window.location.reload()
}

  //incress item in cart
  const increaseQuantity = (itemId) => {
    let index = userCart.findIndex((obj) => obj.id === itemId);
    if (index !== -1) {
      userCart[index].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(userCart));
    }
  };

    //decrease item in cart
    const decreaseQuantity = (itemId) => {
      let index = userCart.findIndex((obj) => obj.id === itemId);
      if (index !== -1) {
        userCart[index].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(userCart));
      }
    };

  return (
    <div className="w-[95%] py-10 mx-auto">
      {userCart?.length > 0 ? (
        <button
          className="block px-3 py-2 rounded-lg mb-10 bg-red-600 text-white font-semibold mx-auto"
          onClick={removeCart}
        >
          Empty the cart
        </button>
      ) : null}
      {userCart?.length > 0 ? (
        <div className="w-full flex justify-between flex-wrap">
          <div className="xl:w-[30%] max-xl:order-1 w-full h-fit bg-sky-950 flex flex-col gap-10 px-5 py-10 rounded-lg">
            <h3 className="bg-white py-3 text-2xl text-sky-950 rounded-lg text-center font-semibold">
              Order Details
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-2">
                <p className="text-white text-xl font-semibold">Order Price:</p>
                <p className="text-white text-xl font-medium">${orderPrice}</p>
              </li>
              <li className="flex gap-2">
                <p className="text-white text-xl font-semibold">Shipping:</p>
                <p className="text-white text-xl font-medium">$10</p>
              </li>
              <li className="flex gap-2">
                <p className="text-white text-xl font-semibold">Total:</p>
                <p className="text-white text-xl font-medium">
                  ${Math.ceil(orderPrice + 10)}
                </p>
              </li>
            </ul>
            <Link
              className="bg-orange-500 hover:bg-orange-400 py-3 text-xl text-white rounded-lg text-center font-semibold"
              to={"/checkout"}
            >
              Checkout
            </Link>
          </div>
          <div className="xl:w-[68%] w-full bg-slate-50 p-5 flex flex-col gap-8 rounded-lg">
            {userCart.map((product) => (
              <ProductCart
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              handelDelete={handelDelete}
              key={product.id}
              product={product}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-center">
          <p className="text-2xl text-sky-950 font-semibold">
            You have no products yet
          </p>
          <Link
            to="/"
            className="p-2 bg-green-600 text-white text-base font-semibold rounded-md"
          >
            Go Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
