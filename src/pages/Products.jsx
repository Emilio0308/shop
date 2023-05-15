// import React from 'react'
// import { Link, useParams } from 'react-router-dom'
// import ProductDetail from '../components/products/ProductDetail'

// const Products = () => {
//   const {id} = useParams()
  
//   return (
//     <main className='p-3 w-full pt-[115px] sm:pt-[70px]'>
//       <ProductDetail productId={id}/>
//     </main>
//   )
// }

// export default Products

// SUponiendo que querramos tener una pagima de home y otra de products debemos hacer que solo products genere las product cart y el home reemplazar todo el contenido ademas actualizar la ruta en App.jsx
{/* <Route path='/products/:id' element= {<ProductDetail/>}/> */}


import React, { useEffect, useState } from 'react'
import ProductCard from '../components/layout/ProductCard'
import { axiosEcommerce } from '../utils/configAxios'

const Products = () => {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [currentCategory, setCurrentCategory] = useState(0)

  const hanldeSubmit = (e) => {
    e.preventDefault()
    const name = e.target.productName.value
    setProductName(name)
    e.target.productName.value = "" 
  }
  const handleClickCategory = (e) => {
    if (e.target.dataset.category == 0) {
      getAllProducts()
    }else{

      setCurrentCategory(Number(e.target.dataset.category))
    }
  }
  const getAllProducts = () => {
    axiosEcommerce.get("products")
    .then( (res) => setProducts(res.data))
    .catch( (err) => console.log(err))  
  }
  useEffect(() => {
    if (currentCategory != 0) {
      axiosEcommerce.get(`products?categoryId=${currentCategory}`)
      .then((res)=> setProducts(res.data))
      .catch((err)=> console.log(err))
    }
  }, [currentCategory])

  useEffect(() => {
    axiosEcommerce.get("categories")
      .then( (res) => setCategories(res.data))
      .catch( (err) => console.log(err)) 
  }, [])

  useEffect(() => {
    axiosEcommerce.get("products")
    .then( (res) => {
      const productsFilter = res.data.filter( (product) => product.title.toLowerCase().includes(productName.toLowerCase()))
      setProducts(productsFilter)
    })
    .catch( (err) => console.log(err))
    
  }, [productName])

  // useEffect(() => {
  //   if (currentCategory == 0) {
  //     getAllProducts()
  //   }
  // }, [currentCategory])
  

  return (
    <main className='pt-[115px] sm:pt-[70px] my-[60px] Home grid grid-rows-[auto,:1fr] w-full sm:grid-rows-1 sm:grid-cols-[auto,_1fr] m-auto px-3 max-w-[1200px] gap-5'>
      <form onSubmit={hanldeSubmit} className='bg-gray-200/20 p-3'>
        <div className='py-[20px] flex gap-2'>
          <input className='outline-none p-1 flex-grow shadow-md shadow-black/10'
           id='productName' placeholder='What are u looking for' type="text" />
          <button className='aspect-square w-[40px]'><i className='bx bx-search'></i></button>
        </div>
        <ul>
          <li className='cursor-pointer' onClick={handleClickCategory} data-category={0}>All</li>
          {
            categories?.map( (category) => 
            <li className='cursor-pointer' onClick={handleClickCategory} data-category={category.id} key={category.id}>{category.name}</li>)
          }
        </ul>
      </form>
      <section className='grid gap-8 grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))]'>
        {
          products?.map( (product)=> <ProductCard key={product.id} product={product} />)
        }
      </section>
    </main>
  )
}

export default Products
