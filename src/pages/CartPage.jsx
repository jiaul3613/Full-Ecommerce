import React from 'react'
import Container from '../component/Container'
import CartItem from '../component/CartItem'
import { useSelector } from 'react-redux'

const CartPage = () => {
  const data = useSelector((state) => state.cart.Cart);

  console.log(data);

  return (
    <div>
        <Container>
            <h4 className='mt-10 mb-10'>home / cart</h4>
            <div  className='grid grid-cols-4 gap-10  shadow-md p-3 mb-2 '>
              <h4>Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
            </div>
           {data.map((item) => {
            return <CartItem key={item.id} title={item.title} price={item.price} img={item.thumbnail} /> 

           })}
        </Container>
    </div>
  )
}

export default CartPage