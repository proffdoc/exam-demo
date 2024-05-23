import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ProductCard } from '../../components/ProductCard'

export const Cart = () => {
    const [data,setData] = useState(JSON.parse(localStorage.getItem("cart")) ?? [])
    const onDelete = (id)=>{
        const filteredItems = data.filter(item=>item._id!==id)
        localStorage.setItem("cart" , JSON.stringify(filteredItems))
        setData(filteredItems)
    }
  return (
    <Flex>{data.map(product=><ProductCard hasActionButton={false} onDelete={onDelete} description={product.description} id={product._id} price={product.price} title={product.title} image={product.image} key={product._id}/>)}
    </Flex>
  )
}

