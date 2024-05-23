import React, { useEffect, useState } from 'react'
import {  Flex } from '@chakra-ui/react'
import { ProductCard } from '../../components/ProductCard'
import axios from "axios"
import { BASE_URL } from '../../api/constant'


const Shop = () => {
  const [data,setData] = useState([])

  const onAddToWishlist =(id)=>{
    console.log(id);
  } 

  const onAddToCart =(id)=>{
    const cartItems = JSON.parse(localStorage.getItem("cart")) ?? []
    if (!cartItems.find(item=>item._id===id)) {
      const product = data.find(item=>item._id===id)
          localStorage.setItem("cart", JSON.stringify([...cartItems,product] ))
    }

  }
  useEffect(() => {
    axios.get(`${BASE_URL}api/products`)
      .then(response => {
        console.log(response);
        setData(response.data.data);

      })
      .catch(error => {
       console.log(error);
      });
  }, []);
  return (
    <Flex>{data.map(product=><ProductCard onAddToCart={onAddToCart} onAddToWishlist={onAddToWishlist} description={product.description} id={product._id} price={product.price} title={product.title} image={product.image} key={product._id}/>)}
    </Flex>
  )
}

export default Shop