import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Cart() {
  const { listadoCarrito } = useContext(CartContext);

  return (
    <>
      <h1>Felicitaciones, has comprado un producto!</h1>
      <h2>Tu carrito:</h2>
      {
        listadoCarrito.map((item, index )=> {
          return(
          <p key={index}>{item.title}</p>
        )})
      }
    </>

  )
}