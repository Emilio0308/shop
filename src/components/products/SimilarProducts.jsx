import React, { useEffect, useState } from 'react'
import { axiosEcommerce } from '../../utils/configAxios'
import ProductCard from '../layout/ProductCard'

const SimilarProducts = ( { categoryId , productId } ) => {

    const [similarProducts, setSimilarProducts] = useState()

    useEffect(() => {
      if (categoryId) {
        axiosEcommerce.get(`products?categoryId=${categoryId}`)
        .then( (res) => {
            const others = res.data.filter(product => product.id !== productId)
            setSimilarProducts(others)
        })
        .catch( () => console.log())
      }
    }, [categoryId, productId])
    
  return (
    <section className='w-full flex flex-col gap-8'>
        <h2 className='text-xl text-red-600'>Discover Similar Products</h2>

        <section className='grid gap-10 grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))]'>
            {
                similarProducts?.map( product => <ProductCard product={product} key={product.id} />)
            }

        </section>

    </section>
  )
}

export default SimilarProducts