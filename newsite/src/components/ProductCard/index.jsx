import React from 'react'
import { Button, Card, CardBody, Flex, Text,Image } from '@chakra-ui/react'



export const ProductCard = ({title,id,image,description,price,onAddToWishlist,onAddToCart,hasActionButton=true,onDelete}) => {
  return (
    <Card maxWidth={"300px"} backgroundColor={"blue"}>
    <CardBody>
      <Image src={image} width={"200px"} height={"150px"}/>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>${price}</Text>
     <Flex gap="16px">
     {hasActionButton ? <>
      <Button onClick={()=>onAddToWishlist(id)}>Add to Wishlist</Button>
      <Button onClick={()=>onAddToCart(id)}>Add to Cart</Button></>:<Button onClick={()=>onDelete(id)}>DELETE</Button>}
      
     </Flex>
    </CardBody>
  </Card>
  )
}

