import { useEffect, useState } from 'react'
import ProductCart from '../components/Products/ProductCart';
import { Link } from 'react-router-dom';
import Spiner from '../utils/Spiner'

const Cart = () => {
    const [userCart, setUserCart] = useState(null)

    const getUserCart = async ()=>{
        await fetch('https://dummyjson.com/carts/5')
        .then(res => res.json())
        .then(data=>setUserCart(data));
    }

    useEffect(()=>{
        getUserCart()
    },[])

    console.log(userCart)

  return (
    <div className="w-[95%] py-10 mx-auto">
        {
            userCart !== null ? (
                <div className='w-full flex justify-between flex-wrap'>
                <div className='xl:w-[30%] max-xl:order-1 w-full h-fit bg-sky-950 flex flex-col gap-10 px-5 py-10 rounded-lg'>
                    <h3 className='bg-white py-3 text-2xl text-sky-950 rounded-lg text-center font-semibold'>
                        Order Details
                    </h3>
                    <ul className='flex flex-col gap-5'>
                        <li className='flex gap-2'>
                            <p className='text-white text-xl font-semibold'>
                                Order Price: 
                            </p>
                            <p className='text-white text-xl font-medium'>
                                ${userCart.total}
                            </p>
                        </li>
                        <li className='flex gap-2'>
                            <p className='text-white text-xl font-semibold'>
                                Price After Discount: 
                            </p>
                            <p className='text-white text-xl font-medium'>
                                ${Math.ceil(userCart.total - userCart.discountedTotal)}
                            </p>
                        </li>
                        <li className='flex gap-2'>
                            <p className='text-white text-xl font-semibold'>
                                Shipping: 
                            </p>
                            <p className='text-white text-xl font-medium'>
                                $10
                            </p>
                        </li>
                        <li className='flex gap-2'>
                            <p className='text-white text-xl font-semibold'>
                                Total: 
                            </p>
                            <p className='text-white text-xl font-medium'>
                            ${Math.ceil(userCart.total - userCart.discountedTotal) + 10}
                            </p>
                        </li>
                    </ul>
                    <Link className='bg-orange-500 hover:bg-orange-400 py-3 text-xl text-white rounded-lg text-center font-semibold' to={'/checkout'}>Checkout</Link>
                </div>
                <div className='xl:w-[68%] w-full bg-slate-50 p-5 flex flex-col gap-8 rounded-lg'>
                    {
                        userCart.products ? (
                            userCart.products.map(product=>(
                                <ProductCart key={product.id} product={product}/>
                            ))
                        ):null
                    }
                </div>
            </div>
            ):(
                <div className='flex justify-center'>
                    <Spiner/>
                </div>
            )
        }
    </div>
  )
}

export default Cart