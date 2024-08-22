import { Link } from 'react-router-dom'
import { getAllCategories } from '../../redux/actions/categoriesAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Close } from '../../images/svg';

const Filter = ({allProducts, setAllProducts, productsData, showFilter, setShowFilter}) => {
    const [allCategories, setAllCategories] = useState([]);
    const [priceFrom, setPriceFrom] = useState("")
    const [priceTo, setPriceTo] = useState("")

  const allCategoriesData = useSelector(state=>state.categoriesReducer.categories)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllCategories())
  },[])

  useEffect(()=>{
    if(allCategoriesData){
      if(allCategoriesData.status === 200){
        if(allCategoriesData.data){
          setAllCategories(allCategoriesData.data)
        }
      }
    }
  },[allCategoriesData])


  //onSubmit price filter
  const onSubmitFilter = (e)=>{
    e.preventDefault()
    if(priceTo !== "" && priceFrom !== ""){
      const filteredProduct = allProducts.filter(product=> product.price >= priceFrom && product.price <= priceTo)
      setAllProducts(filteredProduct)
    }
    setShowFilter(false)
  }


  return (
    <aside className={`${showFilter ? 'fixed pt-10 pb-14 h-screen top-0 left-0 z-10 w-[70%] overflow-y-auto':'max-xl:hidden flex-shrink-0'} w-[20%] bg-sky-950 rounded-md py-10 px-5 text-xl font-semibold`}>
        <img className='xl:hidden mx-auto mb-10' width={20} src={Close} alt='close' onClick={()=>setShowFilter(false)}/>
        <div className="flex flex-col gap-5">
        <h4 className="text-sky-950 text-center py-3 bg-white rounded-lg capitalize b">Price Filter</h4>
        <form className="flex flex-col gap-5" onSubmit={onSubmitFilter}>
          <div className="flex flex-col gap-3">
          <label className="text-lg text-white" htmlFor="from">From:</label>
          <input className="text-sky-950 outline-none pl-2" type="number" id="from" value={priceFrom} onChange={(e)=>{
          setPriceFrom(e.target.value)
          setAllProducts(productsData?.products)
          }}/>
          </div>
          <div className="flex flex-col gap-1">
          <label className="text-lg text-white" htmlFor="to">To:</label>
          <input className="text-sky-950 outline-none pl-2" type="number" id="to" value={priceTo} onChange={(e)=>{
          setPriceTo(e.target.value)
          setAllProducts(productsData?.products)
          }}/>
          </div>
          <input className="w-fit px-5 py-2 rounded-lg bg-orange-500 text-lg cursor-pointer text-white font-semibold" type="submit" value={"Filter"}/>
        </form>
        </div>
        <div className="flex flex-col gap-5 mt-12">
          <h4 className="text-sky-950 text-center py-3 bg-white rounded-lg capitalize">Categories</h4>
          <ul>
           {
            allCategories ? (
              allCategories.map(cat=>(
                <li key={cat.name} className="mb-3">
                  <Link className="text-white hover:text-orange-500 py-1 duration-300 text-lg font-medium" to={`/category/${cat.slug}`}
                  onClick={()=> setShowFilter(false)}
                  >
                  {cat.name}</Link>
                </li>
              ))
            ):null
           }
          </ul>
        </div>
      </aside>
  )
}

export default Filter