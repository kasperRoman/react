import React, { useEffect, useState } from 'react'
import { IProduct } from '../../models/IProductModel'
import { getProducts } from '../../services/dummyApi.servece';
import Product from '../product/Product';

const Products = () => {
 const [products,setProducts] = useState<IProduct[]>([]);
 useEffect(()=>{
 getProducts().then(response =>setProducts(response))


 },[])


  return (
    <div>
{
    products.map(product=><Product item={product} key={product.id}/>)
}

    </div>
  )
}

export default Products