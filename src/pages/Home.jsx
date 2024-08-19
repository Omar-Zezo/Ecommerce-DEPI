import MainSlider from '../components/Home/MainSlider'
import CategoriesSection from '../components/Home/CategoriesSection';
import ProductsSlider from '../components/Home/ProductsSlider';


const Home = () => {

  return (
    <>
      <MainSlider/>
      <CategoriesSection/>
      <ProductsSlider title="best mens watches" category={"mens-watches"}/>
      <ProductsSlider title="best mens Shirts" category={"mens-shirts"}/>
      <ProductsSlider title="best womens bags" category={"womens-bags"}/>
      <ProductsSlider title="best selling furniture" category={"furniture"}/>
      <ProductsSlider title="best selling laptops" category={"laptops"}/>
    </>
  )
}

export default Home