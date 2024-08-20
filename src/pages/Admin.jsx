import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCardAdmin from '../components/Products/ProductCardAdmin'

const Admin = () => {
    const [allProducts, setAllProducts] = useState([])

    const getAllProducts = async()=>{
        await fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=> setAllProducts(data.products));
    }

    useEffect(()=>{
        getAllProducts()
    },[])


  return (
    <div className="min-h-screen w-[95%] flex justify-between py-10 mx-auto">
        <aside className='w-[25%] p-10 min-h-screen flex flex-col gap-5 bg-sky-950 rounded-lg'>
            <Link to="/admin" className='w-full p-3 bg-white text-lg text-sky-950 font-semibold text-center rounded-lg'>Manage All Products</Link>
            <Link to="/admin/add-product" className='w-full p-3 bg-white text-lg text-sky-950 font-semibold text-center rounded-lg'>Add New Product</Link>
        </aside>
        <div className='w-[73%] min-h-screen bg-sky-950 flex flex-col gap-5 rounded-lg p-5'>
            <h2 className='w-full text-3xl uppercase text-white font-semibold text-center'>Manage All Products</h2>
            <div className='flex gap-5 mt-10 flex-wrap'>
                {
                    allProducts ? (
                        allProducts.map(product=>(
                            <ProductCardAdmin key={product.title} cardSize={"w-[280px]"} product={product}/>
                        ))
                    ):(null)
                }
            </div>
        </div>
    </div>
  )
}

export default Admin